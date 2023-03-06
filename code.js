function pesoMercurio() {
  return (getNumber("caixa_texto1") * 0.37);
}
function pesoVenus() {
  return (getNumber("caixa_texto1") * 0.88);
}
function pesoMarte() {
  return (getNumber("caixa_texto1") * 0.38);
}
function pesoJupiter() {
  return (getNumber("caixa_texto1") * 2.64);
}
function pesoSaturno() {
  return (getNumber("caixa_texto1") * 1.15);
}
function pesoUrano() {
  return (getNumber("caixa_texto1") * 1.17);
}
function pesoNetuno() {
  return (getNumber("caixa_texto1") * 1.18);
}
onEvent("caixa_texto1", "input", function( ) {
  setText("labelMercúrio", Math.round(pesoMercurio()));
  setText("labelVenus", Math.round(pesoVenus()));
  setText("labelMarte", Math.round(pesoMarte()));
  setText("labelJupiter", Math.round(pesoJupiter()));
  setText("labelSaturno",Math.round(pesoSaturno()));
  setText("labelUrano",Math.round(pesoUrano()));
  setText("labelNetuno",Math.round(pesoNetuno()));
});
