export default [
  {
    title: 'Meus Atendimentos',
    icon: 'favorite',
    link: '/services',
    admin: false,
  },
  {
    icon: 'settings',
    title: 'Minhas Configurações',
    active: false,
    admin: true,
    children: [
      {
        title: 'Clientes',
        icon: 'people',
        link: '/clients',
      },
      {
        title: 'Planos',
        icon: 'description',
        link: '/plans',
      },
    ],
  },
  {
    divider: true,
  },
];
