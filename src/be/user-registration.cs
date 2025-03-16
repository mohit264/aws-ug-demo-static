// Create API for User Registration
public void CreateUser(string username, string password, string email)
{
    // Check if user already exists
    if (UserExists(username))
    {
        throw new Exception("User already exists");
    }

    // Hash the password
    string hashedPassword = HashPassword(password);

    // Insert user into database
    string query = "INSERT INTO Users (username, password, email) VALUES (@username, @password, @email)";
    using (SqlConnection connection = new SqlConnection(connectionString))
    {
        using (SqlCommand command = new SqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@username", username);
            command.Parameters.AddWithValue("@password", hashedPassword);
            command.Parameters.AddWithValue("@email", email);
            connection.Open();
            command.ExecuteNonQuery();
        }
    }
}