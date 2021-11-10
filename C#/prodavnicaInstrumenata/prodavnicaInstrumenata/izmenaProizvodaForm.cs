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
    public partial class izmenaProizvodaForm : Form
    {
        public izmenaProizvodaForm()
        {
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
            txtNaziv.Enabled = false;
            txtModel.Enabled = false;
            txtCena.Enabled = false;
            txtGarancija.Enabled = false;
            txtKategorija.Enabled = false;
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();

            string prikaz = "SELECT naziv,model,cena,garancija,kategorija FROM Proizvod WHERE proizvodId=@ID";

            SqlCommand command = new SqlCommand(prikaz, connection);
            command.Parameters.AddWithValue("@ID", cmbProizvodi.SelectedItem);

            SqlDataReader sdr = command.ExecuteReader();

            txtNaziv.Enabled = true;
            txtModel.Enabled = true;
            txtCena.Enabled = true;
            txtGarancija.Enabled = true;
            txtKategorija.Enabled = true;

            while (sdr.Read())
            {
                txtNaziv.Text = sdr.GetValue(0).ToString();             
                txtModel.Text = sdr.GetValue(1).ToString();
                txtCena.Text = sdr.GetValue(2).ToString();
                txtGarancija.Text = sdr.GetValue(3).ToString();
                txtKategorija.Text = sdr.GetValue(4).ToString();
            }

            connection.Close();
        }

        private void btn2_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();

            string unos = "UPDATE Proizvod SET naziv=@val1, model=@val2, cena=@val3, garancija=@val4, kategorija=@val5 WHERE ProizvodId=@ID";
            SqlCommand command = new SqlCommand(unos, connection);

            command.Parameters.AddWithValue("@ID", cmbProizvodi.SelectedItem);
            command.Parameters.AddWithValue("@val1", txtNaziv.Text);
            command.Parameters.AddWithValue("@val2", txtModel.Text);
            command.Parameters.AddWithValue("@val3", txtCena.Text);
            command.Parameters.AddWithValue("@val4", txtGarancija.Text);
            command.Parameters.AddWithValue("@val5", txtKategorija.Text);

            command.ExecuteNonQuery();

            MessageBox.Show("Uspesno ste izmenili proizvod.", "Poruka");
            connection.Close();

            this.Close();
        }

        private void txtCena_KeyPress(object sender, KeyPressEventArgs e)
        {
            e.Handled = !char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar);
        }

        private void izmenaProizvodaForm_Load(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            string dodajKorisnike = "SELECT proizvodID FROM Proizvod";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(dodajKorisnike, connection);
            SqlDataReader sdr = command.ExecuteReader();

            while (sdr.Read())
                cmbProizvodi.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            connection.Close();
        }
    }
}
