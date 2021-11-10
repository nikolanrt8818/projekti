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
    public partial class prikazRacuna : Form
    {
        public prikazRacuna()
        {
            InitializeComponent();
        }

        private void prikazRacuna_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'prodavnicaDataSet.Racun' table. You can move, or remove it, as needed.
            this.racunTableAdapter.Fill(this.prodavnicaDataSet.Racun);

        }
    }
}
