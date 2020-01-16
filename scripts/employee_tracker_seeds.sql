USE emlployee_tracker_db;

INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES 
        ('Brock', 'Thigpen', 1, 1);

INSERT INTO role (title, salary, department_id)
    VALUES
        ('student', 90000.00, 1);

INSERT INTO department (name)
    VALUES
        ('Development'),
        ('Testing');