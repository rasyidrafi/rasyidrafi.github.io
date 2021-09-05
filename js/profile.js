$.ajax({
  type: "GET",
  url: "https://raw.githubusercontent.com/rasyidrafi/rasyidrafi/main/README.md",
  success: (res) => {
    var converter = new showdown.Converter();
    var readme = converter.makeHtml(res);
    $('#readme').prepend(readme);
  },
  error: err => {
    console.error(err)
  }
});