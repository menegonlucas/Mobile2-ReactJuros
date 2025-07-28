import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Financiamento() {
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [juros, setJuros] = useState('');
  const [taxaAdicional, setTaxaAdicional] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const C = parseFloat(valor);
    const t = parseInt(parcelas);
    const i = parseFloat(juros) / 100;
    const adicional = parseFloat(taxaAdicional);

    if (!C || !t || isNaN(i) || isNaN(adicional)) {
      setResultado('Preencha todos os campos corretamente.');
      return;
    }

    const montante = C * Math.pow(1 + i, t) + adicional;
    const parcela = montante / t;

    setResultado(`Montante total: R$ ${montante.toFixed(2)}\nParcela: R$ ${parcela.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de Financiamento</Text>

      <TextInput placeholder="Valor do bem" keyboardType="numeric" value={valor} onChangeText={setValor} style={styles.input} />
      <TextInput placeholder="Nº de parcelas" keyboardType="numeric" value={parcelas} onChangeText={setParcelas} style={styles.input} />
      <TextInput placeholder="Juros mensais (%)" keyboardType="numeric" value={juros} onChangeText={setJuros} style={styles.input} />
      <TextInput placeholder="Taxas adicionais (R$)" keyboardType="numeric" value={taxaAdicional} onChangeText={setTaxaAdicional} style={styles.input} />

      <Button title="Calcular" onPress={calcular} />

      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000000ff' },
  titulo: { fontSize: 24, color: '#fff', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#43064bff', color: '#fff', padding: 10, marginBottom: 10, borderRadius: 6 },
  resultado: { marginTop: 20, color: '#fff', fontSize: 16, textAlign: 'center' },
});