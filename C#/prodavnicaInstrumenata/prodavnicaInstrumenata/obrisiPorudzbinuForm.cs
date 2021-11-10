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
    public partial class obrisiPorudzbinuForm : Form
    {
        public obrisiPorudzbinuForm()
        {
            InitializeComponent();
            this.BackColor = Color.FromArgb(240, 228, 194);
        }

        private void obrisiPorudzbinuForm_Load(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            string dodajPorudzbinu = "SELECT porudzbinaID FROM Porudzbina";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(dodajPorudzbinu, connection);
            SqlDataReader sdr = command.ExecuteReader();       

            while (sdr.Read())
                cmbPorudzbine.Items.AddRange(new string[] { sdr.GetValue(0).ToString() });
            sdr.Close();

            connection.Close();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=DESKTOP-7EPTD4S;Initial Catalog=Prodavnica;Integrated Security=True";
            string brisanjeRacuna = "DELETE FROM Racun WHERE porudzbinaId=@ID";

            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand command = new SqlCommand(brisanjeRacuna, connection);

            command.Parameters.AddWithValue("@ID", cmbPorudzbine.SelectedItem);
            command.ExecuteNonQuery();

            string brisanjePorudzbine = "DELETE FROM Porudzbina WHERE porudzbinaId=@ID";
            command = new SqlCommand(brisanjePorudzbine, connection);

            command.Parameters.AddWithValue("@ID", cmbPorudzbine.SelectedItem);
            command.ExecuteNonQuery();

            MessageBox.Show("Uspešno ste obrisali porudžbinu.", "Poruka");
            connection.Close();
            this.Close();
        }
    }
}
