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
    public partial class obrisiKorisnikaForm : Form
    {
        public obrisiKorisnikaForm()
        {
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            string brisanjeKor = "DELETE FROM Korisnik WHERE korisnikID=@ID";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(brisanjeKor, connection);

            command.Parameters.AddWithValue("@ID", cmbKorisnici.SelectedItem);
            command.ExecuteNonQuery();

            MessageBox.Show("Uspešno ste obrisali korisnika.", "Poruka");
            connection.Close();
            this.Close();
        }

        private void textBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            e.Handled = !char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar);
        }

        private void obrisiKorisnikaForm_Load(object sender, EventArgs e)
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
