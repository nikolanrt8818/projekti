using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace prodavnicaInstrumenata
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            this.BackColor=Color.FromArgb(240, 228, 194);
        }
        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnPrikaz_Click(object sender, EventArgs e)
        {
            Form2 frm2 = new Form2();
            frm2.Show();
        }

        private void btnPrikazKor_Click(object sender, EventArgs e)
        {
            Form3 frm3 = new Form3();
            frm3.Show();
        }

        private void btnPorudzbine_Click(object sender, EventArgs e)
        {
            Form4 frm4 = new Form4();
            frm4.Show();
        }

        private void btnIzmeniProizvod_Click(object sender, EventArgs e)
        {
            dodajProizvodForm frm5 = new dodajProizvodForm();
            frm5.Show();
        }

        private void btnObrisiProizvod_Click(object sender, EventArgs e)
        {
            obrisiProizvodForm frm6 = new obrisiProizvodForm();
            frm6.Show();
        }

        private void btnIzmeni_Click(object sender, EventArgs e)
        {
            izmenaProizvodaForm frm7 = new izmenaProizvodaForm();
            frm7.Show();
        }

        private void btnDodajKor_Click(object sender, EventArgs e)
        {
            dodajKorisnikaForm frm8 = new dodajKorisnikaForm();
            frm8.Show();
        }

        private void btnObrisiKor_Click(object sender, EventArgs e)
        {
            obrisiKorisnikaForm frm9 = new obrisiKorisnikaForm();
            frm9.Show();
        }

        private void btnIzmeniKor_Click(object sender, EventArgs e)
        {
            izmeniKorisnikaForm frm10 = new izmeniKorisnikaForm();
            frm10.Show();
        }

        private void btnDodajPr_Click(object sender, EventArgs e)
        {
            dodajPorudzbinuForm frm11 = new dodajPorudzbinuForm();
            frm11.Show();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            obrisiPorudzbinuForm frm12 = new obrisiPorudzbinuForm();
            frm12.Show();
        }

        private void btnIzmeniPr_Click(object sender, EventArgs e)
        {
            izmeniPorudzbinuForm frm13 = new izmeniPorudzbinuForm();
            frm13.Show();
        }

        private void btnPrikazRac_Click(object sender, EventArgs e)
        {
            prikazRacuna frm14 = new prikazRacuna();
            frm14.Show();
        }
    }
}
