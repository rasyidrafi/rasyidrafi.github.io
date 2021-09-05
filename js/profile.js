$.ajax({
  type: "GET",
  url: "https://raw.githubusercontent.com/rasyidrafi/rasyidrafi/main/README.md",
  success: (res) => {
    var converter = new showdown.Converter();
    var readme = converter.makeHtml(res);
    $('#readme').prepend(readme);
    $('.stats br').remove();
  },
  error: err => {
    console.error(err)
  }
});