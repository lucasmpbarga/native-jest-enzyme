export const appData = {
  currentClient: null, // cliente logado
  screenID: null, // tela que vai ser chamada, no caso de deeplink será a classe que deverá ser aberta
  theme: null, // tema do usuario
  hasToken: false,
};

export const hasToken = () => {
  return appData.hasToken;
};
