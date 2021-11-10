using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace prodavnicaInstrumenata
{
    public partial class dodajKorisnikaForm : Form
    {
        public dodajKorisnikaForm()
        {
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
            txtID.Enabled = false;
            txtID.MaxLength = 4;
        }

        private void dodajKorisnikaForm_Load(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";

            string idd = "SELECT MAX(korisnikID) FROM Korisnik";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(idd, connection);
            SqlDataReader sdr = command.ExecuteReader();

            while (sdr.Read())
            {
                txtID.Text = sdr.GetValue(0).ToString();
            }
            int broj = int.Parse(txtID.Text);
            broj++;
            txtID.Text = broj.ToString();

            connection.Close();
        }

        private void btnUnesiKor_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            string unosKor = "INSERT INTO Korisnik(korisnikID, ime, prezime, brojTelefona, adresa, grad, email) " +
                "VALUES(@val1,@val2,@val3,@val4,@val5,@val6,@val7)";

            SqlConnection connection = new SqlConnection(connString);
            SqlCommand command = new SqlCommand(unosKor, connection);

            command.Parameters.AddWithValue("@val1", txtID.Text);
            command.Parameters.AddWithValue("@val2", txtIme.Text);
            command.Parameters.AddWithValue("@val3", txtPrezime.Text);
            command.Parameters.AddWithValue("@val4", txtBrTelefona.Text);
            command.Parameters.AddWithValue("@val5", txtAdresa.Text);
            command.Parameters.AddWithValue("@val6", txtGrad.Text);
            command.Parameters.AddWithValue("@val7", txtEmail.Text);
            try
            {
                connection.Open();
                command.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
                MessageBox.Show(ex.ToString());
            }

            MessageBox.Show("Uspešno ste uneli korisnika.", "Poruka");
            this.Close();

        }
    }
}
