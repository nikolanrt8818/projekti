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
    public partial class izmeniPorudzbinuForm : Form
    {
        public izmeniPorudzbinuForm()
        {
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
            cmbKorisnici.Enabled = false;
            cmbProizvodi.Enabled = false;
            txtKolicina.Enabled = false;
        }

        private void izmeniPorudzbinuForm_Load(object sender, EventArgs e)
        {

            /*Ucitavanje Porudzbina*/
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            string porudzbine = "SELECT porudzbinaID FROM Porudzbina";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(porudzbine, connection);
            SqlDataReader sdr = command.ExecuteReader();

            while (sdr.Read())
                cmbPorudzbine.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            /*Ucitavanje Korisnika*/
            string korisnici = "SELECT korisnikID FROM Korisnik";
            command = new SqlCommand(korisnici, connection);
            sdr = command.ExecuteReader();

            while (sdr.Read())
                cmbKorisnici.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            /*Ucitavanje proizvoda*/
            string proizvodi = "SELECT proizvodID FROM Proizvod";
            command = new SqlCommand(proizvodi, connection);
            sdr = command.ExecuteReader();

            while (sdr.Read())
                cmbProizvodi.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            connection.Close();
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();

            string korID = "SELECT korisnikID,proizvodID,kolicina,datum FROM Porudzbina WHERE porudzbinaID=@ID";
            SqlCommand command = new SqlCommand(korID, connection);
            command.Parameters.AddWithValue("@ID", cmbPorudzbine.SelectedItem);
            SqlDataReader sdr = command.ExecuteReader();

            cmbKorisnici.Enabled = true;
            cmbProizvodi.Enabled = true;
            txtKolicina.Enabled = true;

            while(sdr.Read())
            {
                cmbKorisnici.SelectedItem = sdr.GetValue(0).ToString();
                cmbProizvodi.Text = sdr.GetValue(1).ToString();
                txtKolicina.Text = sdr.GetValue(2).ToString();
            }

            connection.Close();
        }

        private void btn2_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();

            string unos = "UPDATE Porudzbina SET korisnikID=@val1,proizvodID=@val2,kolicina=@val3 WHERE porudzbinaID=@ID";
            SqlCommand command = new SqlCommand(unos, connection);

            command.Parameters.AddWithValue("@ID", cmbPorudzbine.SelectedItem);
            command.Parameters.AddWithValue("@val1", cmbKorisnici.SelectedItem);
            command.Parameters.AddWithValue("@val2", cmbProizvodi.SelectedItem);
            command.Parameters.AddWithValue("@val3", txtKolicina.Text);

            command.ExecuteNonQuery();
            MessageBox.Show("Uspešno ste izmenili porudžbinu.", "Poruka");
            connection.Close();

            this.Close();
        }
    }
}
