
namespace prodavnicaInstrumenata
{
    partial class prikazRacuna
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.prodavnicaDataSet = new prodavnicaInstrumenata.ProdavnicaDataSet();
            this.racunBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.racunTableAdapter = new prodavnicaInstrumenata.ProdavnicaDataSetTableAdapters.RacunTableAdapter();
            this.racunIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.porudzbinaIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ukupnaCenaDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.prodavnicaDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.racunBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AllowUserToAddRows = false;
            this.dataGridView1.AllowUserToDeleteRows = false;
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.Fill;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.racunIDDataGridViewTextBoxColumn,
            this.porudzbinaIDDataGridViewTextBoxColumn,
            this.ukupnaCenaDataGridViewTextBoxColumn});
            this.dataGridView1.DataSource = this.racunBindingSource;
            this.dataGridView1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dataGridView1.Location = new System.Drawing.Point(0, 0);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.ReadOnly = true;
            this.dataGridView1.RowHeadersWidth = 51;
            this.dataGridView1.RowTemplate.Height = 24;
            this.dataGridView1.Size = new System.Drawing.Size(800, 450);
            this.dataGridView1.TabIndex = 0;
            // 
            // prodavnicaDataSet
            // 
            this.prodavnicaDataSet.DataSetName = "ProdavnicaDataSet";
            this.prodavnicaDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // racunBindingSource
            // 
            this.racunBindingSource.DataMember = "Racun";
            this.racunBindingSource.DataSource = this.prodavnicaDataSet;
            // 
            // racunTableAdapter
            // 
            this.racunTableAdapter.ClearBeforeFill = true;
            // 
            // racunIDDataGridViewTextBoxColumn
            // 
            this.racunIDDataGridViewTextBoxColumn.DataPropertyName = "racunID";
            this.racunIDDataGridViewTextBoxColumn.HeaderText = "racunID";
            this.racunIDDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.racunIDDataGridViewTextBoxColumn.Name = "racunIDDataGridViewTextBoxColumn";
            this.racunIDDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // porudzbinaIDDataGridViewTextBoxColumn
            // 
            this.porudzbinaIDDataGridViewTextBoxColumn.DataPropertyName = "porudzbinaID";
            this.porudzbinaIDDataGridViewTextBoxColumn.HeaderText = "porudzbinaID";
            this.porudzbinaIDDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.porudzbinaIDDataGridViewTextBoxColumn.Name = "porudzbinaIDDataGridViewTextBoxColumn";
            this.porudzbinaIDDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // ukupnaCenaDataGridViewTextBoxColumn
            // 
            this.ukupnaCenaDataGridViewTextBoxColumn.DataPropertyName = "ukupnaCena";
            this.ukupnaCenaDataGridViewTextBoxColumn.HeaderText = "ukupnaCena";
            this.ukupnaCenaDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.ukupnaCenaDataGridViewTextBoxColumn.Name = "ukupnaCenaDataGridViewTextBoxColumn";
            this.ukupnaCenaDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // prikazRacuna
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.dataGridView1);
            this.Name = "prikazRacuna";
            this.Text = "prikazRacuna";
            this.Load += new System.EventHandler(this.prikazRacuna_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.prodavnicaDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.racunBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private ProdavnicaDataSet prodavnicaDataSet;
        private System.Windows.Forms.BindingSource racunBindingSource;
        private ProdavnicaDataSetTableAdapters.RacunTableAdapter racunTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn racunIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn porudzbinaIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn ukupnaCenaDataGridViewTextBoxColumn;
    }
}