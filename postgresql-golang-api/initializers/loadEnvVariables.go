package initializers

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

var DBURI, PORT, AUTH_USERNAME, AUTH_PASSWORD string

func LoadEnvVariables() {
	// loading environment variables
	err := godotenv.Load()
	if err != nil {
		// not log.Fatal for production
		fmt.Println("Error loading .env file")
	}

	DBURI = os.Getenv("DBURI")
	PORT = os.Getenv("PORT")
	AUTH_USERNAME = os.Getenv("AUTH_USERNAME")
	AUTH_PASSWORD = os.Getenv("AUTH_PASSWORD")
}
