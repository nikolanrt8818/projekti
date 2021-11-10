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
    public partial class obrisiProizvodForm : Form
    {
        public obrisiProizvodForm()
        {
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string brisanje = "DELETE FROM Proizvod WHERE proizvodID=@val1";
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(brisanje, connection);

            command.Parameters.AddWithValue("@val1",cmbProizvodi.SelectedItem);
            command.ExecuteNonQuery();

            MessageBox.Show("Uspešno ste obrisali proizvod.", "Poruka");
            connection.Close();
            this.Close();

        }

        private void textBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            e.Handled = !char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar);
        }

        private void obrisiProizvodForm_Load(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            string dodajPorudzbinu = "SELECT proizvodID FROM Proizvod";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(dodajPorudzbinu, connection);
            SqlDataReader sdr = command.ExecuteReader();

            while (sdr.Read())
                cmbProizvodi.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            connection.Close();
        }
    }
}
