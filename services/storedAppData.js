export const storedAppData = {
  currentClient: null, // cliente logado
  screenID: null, // tela que vai ser chamada, no caso de deeplink será a classe que deverá ser aberta
  theme: null, // tema do usuario
  hasToken: false,
};

export const hasToken = () => {
  return storedAppData.hasToken;
};
