db.query(sql, [username, password], (err, result) => {
    if (err) {
      throw err;
    }

    if (result.length > 0) {
      // Valid credentials, redirect to /index
      res.redirect('/index');
    } else {
      // Invalid credentials, redirect back to login page with an error message
      res.redirect('/login?error=1');
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
