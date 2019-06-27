export default [
  {
    header: 'Administração',
  },
  {
    icon: 'build',
    title: 'Cadastros',
    active: false,
    admin: true,
    children: [
      {
        title: 'Categorias',
        icon: 'library_books',
        link: '/admin/categories',
      },
      {
        title: 'Usuários',
        icon: 'people_outline',
        link: '/admin/users',
      },
    ],
  },
  {
    title: 'Configuração',
    icon: 'settings',
    link: '/admin/config',
  },
  {
    divider: true,
  },
];
