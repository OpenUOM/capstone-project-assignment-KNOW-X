const dbConnection = require("./sqlite");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");

const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

const readTeachers = async () => {
    const sql = `SELECT * FROM teacher`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((teachers) => {
                resolve(teachers);
            })
            .catch((error) => {
                console.error("Error occurred while reading teachers: ", error);
                reject(new Error("Failed to fetch teachers. Please try again later."));
            });
    });
}

const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((teacher) => {
                resolve(teacher);
            })
            .catch((error) => {
                console.error("Error occurred while reading teacher: ", error);
                reject(new Error("Failed to fetch teacher. Please try again later."));
            });
    });
}

const addTeacher = async (id, name, age) => {
    const sql = `INSERT INTO teacher(id,name,age) values (?,?,?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age])
            .then(() => {
                resolve({status: "Sucessfully inserted Teacher"});
            })
            .catch((error) => {
                console.error("Error occurred while inserting teacher: ", error);
                reject(new Error("Failed to insert teacher. Please try again later."));
            });
    });
}

const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, id])
            .then(() => {
                resolve({status: "Successfully updated Teacher"});
            })
            .catch((error) => {
                console.error("Error occurred while updating teacher: ", error);
                reject(new Error("Failed to update teacher. Please try again later."));
            });
    });
}

const deleteTeacher = async (id) => {
    const sql = `DELETE FROM teacher WHERE id= ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted Teacher"});
            })
            .catch((error) => {
                console.error("Error occurred while deleting teacher: ", error);
                reject(new Error("Failed to delete teacher. Please try again later."));
            });
    });
}

const readStudents = async () => {
    const sql = `SELECT * FROM student`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((students) => {
                resolve(students);
            })
            .catch((error) => {
                console.error("Error occurred while reading students: ", error);
                reject(new Error("Failed to fetch students. Please try again later."));
            });
    });
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((teacher) => {
                resolve(teacher);
            })
            .catch((error) => {
                console.error("Error occurred while reading student: ", error);
                reject(new Error("Failed to fetch student. Please try again later."));
            });
    });
}

const addStudent = async (id, name, age, hometown) => {
    const sql = `INSERT INTO student(id,name,age,hometown) values (?,?,?,?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age, hometown])
            .then(() => {
                resolve({status: "Sucessfully inserted Student"});
            })
            .catch((error) => {
                console.error("Error occurred while inserting student: ", error);
                reject(new Error("Failed to add student. Please try again later."));
            });
    });
}

const updateStudent = async (name, age, hometown, id) => {
    const sql = `UPDATE student SET name=?, age=?, hometown=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, hometown, id])
            .then(() => {
                resolve({status: "Sucessfully updated Student"});
            })
            .catch((error) => {
                console.error("Error occurred while updating student: ", error);
                reject(new Error("Failed to update student. Please try again later."));
            });
    });
} 

const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id= ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Sucessfully deleted Student"});
            })
            .catch((error) => {
                console.error("Error occurred while deleting student: ", error);
                reject(new Error("Failed to delete student. Please try again later."));
            });
    });
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher,
	dbinitialize
};