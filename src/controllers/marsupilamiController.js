const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM marsubilami", (err, customers) => {
      if (err) {
        res.json(err);
      }
      res.render("marsupilamis", { data: customers });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO marsubilami set ?",
      data,
      (err, customer) => {
        console.log(customer);
        console.log(err);
        res.redirect("/list");
      }
    );
  });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM marsubilami WHERE id = ?", [id], (err, rows) => {
      res.render("marsupilamis_edit", { data: rows[0] });
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE marsubilami set ? where id = ?",
      [newCustomer, id],
      (err, rows) => {
        console.log(err);
        res.redirect("/list");
      }
    );
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM marsubilami WHERE id = ?",
      [id],
      (err, rows) => {
        res.redirect("/list");
      }
    );
  });
};

controller.login = (req, res) => {
  const nom = req.body;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM marsubilami where ? ", nom, (err, customers) => {
      if (err) {
        console.log(req.body);
        res.json(err);
      }
      res.render("marsupilamis", { data: customers });
    });
  });
};

controller.signin = (req, res) => {
  res.render("login");
};

controller.home = (req, res) => {
  res.render("signin");
};

controller.in = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO marsubilami set ?",
      data,
      (err, customer) => {
        console.log(customer);
        console.log(err);
        res.redirect("/signin");
      }
    );
  });
};

module.exports = controller;
