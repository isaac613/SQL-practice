const mysql = require("mysql");

class SQL {
  constructor(host, user, password, database) {
    this.connection = mysql.createConnection({
      host,
      user,
      password,
      database,
    });
  }

  select(fn, name) {
    const query = name
      ? "SELECT name FROM employee_detail_csv WHERE name = ?;"
      : "SELECT name FROM employee_detail_csv;";
    this.connection.query(query, [name], fn);
  }

  create(fn, details) {
    const query = " INTO jobs_history_csv,?,?,?)";

    this.connection.query(query, details, fn);
  }

  update(fn, id, title) {
    const query =
      "UPDATE current_job_details_csv SET job_title = ? WHERE employee_id = ?";

    this.connection.query(query, [title, id], fn);
  }

  delete(fn, id) {
    const query = "DELETE FROM employee_detail_csv WHERE employee_id = ?";

    this.connection.query(query, [id], fn);
  }
}

module.exports = SQL;
