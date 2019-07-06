export default (value) => {
  const date = new Date(value);
  return date.toLocaleDateString(['pt-BR'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};
