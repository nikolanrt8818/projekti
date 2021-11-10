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
    public partial class dodajPorudzbinuForm : Form
    {
        public dodajPorudzbinuForm()
        {
            int kol = 1;
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
            txtID.MaxLength = 4;
            txtID.Enabled = false;
            txtKolicina.MaxLength = 1;
            txtKolicina.Text = kol.ToString();
        }

        private void dodajPorudzbinuForm_Load(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";

            string idd = "SELECT MAX(porudzbinaID) FROM Porudzbina";

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
            sdr.Close();

            /*Dodavanje korisnika u combobox*/
            string dodajKor = "SELECT korisnikID FROM Korisnik";

            command= new SqlCommand(dodajKor, connection);
            sdr = command.ExecuteReader();

            while(sdr.Read())
                cmbKorisnici.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            /*Dodavanje proizvoda u combobox*/
            string dodajPr = "SELECT proizvodID FROM Proizvod";

            command = new SqlCommand(dodajPr, connection);
            sdr = command.ExecuteReader();

            while (sdr.Read())
                cmbProizvodi.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            connection.Close();
        }

        private void btnDodaj_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";

            string unosPrd = "INSERT INTO Porudzbina(porudzbinaID,korisnikID,proizvodID,kolicina,datum) " +
                "VALUES(@val1,@val2,@val3,@val4,@val5)";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(unosPrd, connection);

            var dt = DateTime.Now;
            var datum = dt.Date;

            command.Parameters.AddWithValue("@val1", txtID.Text);
            command.Parameters.AddWithValue("@val2", cmbKorisnici.SelectedItem);
            command.Parameters.AddWithValue("@val3", cmbProizvodi.SelectedItem);
            command.Parameters.AddWithValue("@val4", txtKolicina.Text);
            command.Parameters.AddWithValue("@val5", datum);

            command.ExecuteNonQuery();

            MessageBox.Show("Uspešno ste dodali porudžbinu.", "Poruka");
            connection.Close();
            this.Close();

        }
    }
}
