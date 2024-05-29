# Budget Master

Budget Master is a comprehensive budget management application designed to help users efficiently track and manage their expenses. With intuitive tools for setting financial goals, monitoring spending patterns, and generating detailed reports, Budget Master aims to simplify personal finance management.

## Purpose

The purpose of Budget Master is to provide users with an easy-to-use platform to manage their finances. By offering features such as expense tracking, financial goal setting, and detailed reporting, Budget Master helps users gain control over their spending and achieve their financial objectives.

## Features

- **Expense Tracking**: Log and categorize expenses to monitor where your money goes.
- **Financial Goals**: Set and track progress towards savings or spending goals.
- **Spending Patterns**: Analyze spending habits with visual graphs and charts.
- **Detailed Reports**: Generate comprehensive reports to gain insights into your financial health.

## Dependencies and Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Project Dependencies

- @react-native-async-storage/async-storage
- @react-native-community/datetimepicker
- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/stack
- axios
- core-js
- dayjs
- expo-crypto
- expo-linear-gradient
- expo-splash-screen
- expo-status-bar
- expo
- jsonwebtoken
- jwt-decode
- native-base
- npm-license-crawler
- react-native-gesture-handler
- react-native-gifted-charts
- react-native-linear-gradient
- react-native-pie-chart
- react-native-safe-area-context
- react-native-screens
- react-native-svg
- react-native-tab-view
- react-native
- react

### Installation

1. Clone the repository:
    ```sh
    git clone [https://github.com/jerry19980310/IFN666_A3_FORNT.git]
    git clone [https://github.com/jerry19980310/IFN666_A3_BACK.git]
    
    ```

2. Navigate to the project directory:
    ```sh
    cd BudgetMaster
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Start the Expo development server:
    ```sh
    npx expo start
    ```

5. Open the Expo Go app on your mobile device and scan the QR code displayed in the terminal or browser to see the app in action.


## Application Architecture

Budget Master is built using a modular architecture to ensure scalability and maintainability. The key components of the application are:

- **Frontend**: Built with React Native and Expo, providing a dynamic and responsive user interface.
- **Backend**: Powered by Node.js and Express, handling API requests, authentication, and data processing.
- **Database**: Uses MySQL for storing user data, expenses, and category information.
- **Integration Layer**: Manages integration with external financial services for importing transaction data.

### Folder Structure

``` bosh
PROGRAM/
├── IFN666_A3_BACK
│   ├── docs/                # OpenAPI documentation
│   ├── routes/              # Route handlers (index, users)
│   ├── app.js               # Entry point for the server app
│   ├── db.js                # Connect to MySQL
│   └── package.json         # Project configuration
└── IFN666_A3_FRONT
    ├── assets/              # Asset files (images, fonts, etc.)
    ├── components/          # Reusable UI components
    ├── auth/                # Authentication logic (login, signup)
    ├── screens/             # Application screens
    ├── navigation/          # Navigation configuration
    ├── context/             # Global state management (theme)
    ├── functions/           # API call handling
    ├── locales/             # Localization files for different languages
    ├── app.js               # Entry point for the Expo app
    └── package.json         # Project configuration
```


## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes, ensuring that the code is well-documented with comments.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## Reporting Issues

If you encounter any issues or bugs, please report them using the following steps:

1. Check if the issue has already been reported in the [GitHub Issues](https://github.com/yourusername/BudgetMaster/issues) section.
2. If not, create a new issue with a detailed description of the problem, including steps to reproduce, expected behavior, and screenshots if applicable.
3. Tag the issue appropriately to help us categorize and prioritize it.

Thank you for helping us improve Budget Master!

---

Thank you for using Budget Master! We hope it helps you manage your finances more effectively.
