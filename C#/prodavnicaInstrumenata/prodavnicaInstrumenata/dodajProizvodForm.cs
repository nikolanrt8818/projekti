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
    public partial class dodajProizvodForm : Form
    {
        public dodajProizvodForm()
        {
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
            txtID.MaxLength = 3;
            txtID.Enabled = false;
        }

        private void txtCena_KeyPress(object sender, KeyPressEventArgs e)
        {
            e.Handled = !char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar);
        }

        private void btnUnesi_Click(object sender, EventArgs e)
        {
            string unos = "INSERT INTO Proizvod(proizvodID, naziv, model, cena, garancija, kategorija) VALUES(@val1,@val2,@val3,@val4,@val5,@val6)";
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";

            SqlConnection connection = new SqlConnection(connString);

            SqlCommand command = new SqlCommand(unos, connection);
            command.Parameters.AddWithValue("@val1", txtID.Text);
            command.Parameters.AddWithValue("@val2", txtNaziv.Text);
            command.Parameters.AddWithValue("@val3", txtModel.Text);
            command.Parameters.AddWithValue("@val4", txtCena.Text);
            command.Parameters.AddWithValue("@val5", txtGarancija.Text);
            command.Parameters.AddWithValue("@val6", txtKategorija.Text);
            try
            {
                connection.Open();
                command.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
                MessageBox.Show(ex.ToString());
            }
                
            MessageBox.Show("Uspešno ste dodali proizvod.", "Poruka");

            this.Close();
        }

        private void dodajProizvodForm_Load(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";

            string idd = "SELECT MAX(proizvodID) FROM Proizvod";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(idd, connection);
            SqlDataReader sdr = command.ExecuteReader();

            while(sdr.Read())
            {
                txtID.Text = sdr.GetValue(0).ToString();
            }
            int broj = int.Parse(txtID.Text);
            broj++;
            txtID.Text = broj.ToString();

            connection.Close();
        }
    }
}
