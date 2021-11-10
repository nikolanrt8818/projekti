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
    public partial class izmeniKorisnikaForm : Form
    {
        public izmeniKorisnikaForm()
        {
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
            txtIme.Enabled = false;
            txtPrezime.Enabled = false;
            txtBrTelefona.Enabled = false;
            txtAdresa.Enabled = false;
            txtGrad.Enabled = false;
            txtEmail.Enabled = false;
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();

            string prikaz = "SELECT ime,prezime,brojTelefona,adresa,grad,email FROM Korisnik WHERE korisnikID=@ID";

            SqlCommand command = new SqlCommand(prikaz, connection);
            command.Parameters.AddWithValue("@ID", cmbKorisnici.SelectedItem);

            SqlDataReader sdr = command.ExecuteReader();

            txtIme.Enabled = true;
            txtPrezime.Enabled = true;
            txtBrTelefona.Enabled = true;
            txtAdresa.Enabled = true;
            txtGrad.Enabled = true;
            txtEmail.Enabled = true;

            while(sdr.Read())
            {
                txtIme.Text = sdr.GetValue(0).ToString();
                txtPrezime.Text = sdr.GetValue(1).ToString();
                txtBrTelefona.Text = sdr.GetValue(2).ToString();
                txtAdresa.Text = sdr.GetValue(3).ToString();
                txtGrad.Text = sdr.GetValue(4).ToString();
                txtEmail.Text = sdr.GetValue(5).ToString();
            }

            connection.Close();
        }

        private void btn2_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();

            string unos = "UPDATE Korisnik SET ime=@val1,prezime=@val2,brojTelefona=@val3,adresa=@val4,grad=@val5,email=@val6 WHERE korisnikID=@ID";
            SqlCommand command = new SqlCommand(unos, connection);

            command.Parameters.AddWithValue("@ID",cmbKorisnici.SelectedItem);
            command.Parameters.AddWithValue("@val1", txtIme.Text);
            command.Parameters.AddWithValue("@val2", txtPrezime.Text);
            command.Parameters.AddWithValue("@val3", txtBrTelefona.Text);
            command.Parameters.AddWithValue("@val4", txtAdresa.Text);
            command.Parameters.AddWithValue("@val5", txtGrad.Text);
            command.Parameters.AddWithValue("@val6", txtEmail.Text);

            command.ExecuteNonQuery();
            MessageBox.Show("Uspesno ste izmenili korisnika","Poruka");
            connection.Close();

            this.Close();
        }

        private void izmeniKorisnikaForm_Load(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            string dodajKorisnike = "SELECT korisnikID FROM Korisnik";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(dodajKorisnike, connection);
            SqlDataReader sdr = command.ExecuteReader();

            while (sdr.Read())
                cmbKorisnici.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            connection.Close();
        }
    }
}
