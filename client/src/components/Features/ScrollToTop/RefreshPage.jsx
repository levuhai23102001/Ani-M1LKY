const RefreshPage = () => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  return null;
};

export default RefreshPage;
