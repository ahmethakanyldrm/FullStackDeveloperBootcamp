using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FirstSolution.DesktopApp
{
    public partial class Form1 : Form
    {
        decimal amount = 0;
        int num = 0;
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            listBox1.Items.Add("Meyve");
            amount += 10;
            label1.Text = "₺" + amount.ToString("#,##0.00");

            num++;

            dataGridView1.Rows.Add();
            int count = dataGridView1.Rows.Count;
            dataGridView1.Rows[count - 1].Cells[0].Value = num;
            dataGridView1.Rows[count - 1].Cells[1].Value = "Meyve";
            dataGridView1.Rows[count - 1].Cells[2].Value = 10;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            listBox1.Items.Add("Sebze");
            amount += 20;
            label1.Text = "₺" + amount.ToString("#,##0.00");
        }

 
        private void listBox1_MouseDoubleClick(object sender, MouseEventArgs e)
        {
          if ( MessageBox.Show("Kaydı Silmek İster Misiniz?", "Sil", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
            {
                var select = listBox1.SelectedItem;
                if (select != null)
                {
                    if ((string)select == "Meyve")
                    {
                        amount -= 10;
                        label1.Text = "₺" + amount.ToString("#,##0.00");
                    }
                    else
                    {
                        amount -= 20;
                        label1.Text = "₺" + amount.ToString("#,##0.00");
                    }
                }
                listBox1.Items.Remove(select);
            }

           
        }
    }
}
