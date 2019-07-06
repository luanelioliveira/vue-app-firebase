export default (value) => {
  const dateTime = new Date(value);
  return dateTime.toLocaleDateString(['pt-BR'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
