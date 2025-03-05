// settings.js

const settings = {
    apiBaseUrl: 'http://localhost:9000', // URL de base du backend
    authEndpoint: '/api/auth', // Point d'authentification pour la gestion des utilisateurs
    studentsEndpoint: '/api/etudiants', // Point d'accès pour les étudiants
    teachersEndpoint: '/api/enseignants', // Point d'accès pour les enseignants
    adminEndpoint: '/api/admin', // Point d'accès pour les administrateurs
    roles: {
        student: 'ETUDIANT',
        teacher: 'ENSEIGNANT',
        admin: 'ADMIN'
    },
    loginUrl: '/login', // URL pour la page de connexion
    logoutUrl: '/logout', // URL pour la déconnexion
    errorMessageDuration: 5000, // Durée de l'affichage des messages d'erreur (en millisecondes)
    successMessageDuration: 3000, // Durée de l'affichage des messages de succès (en millisecondes)
};

export default settings;
