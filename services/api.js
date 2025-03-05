const API_URL = 'http://localhost:9000/api'; // L'URL de base de votre backend

// Fonction pour effectuer l'authentification
function authenticateUser(matricule, role) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${API_URL}/auth`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                matricule: matricule,
                role: role
            }),
            success: function (response) {
                if (response.valid) {
                    resolve(response); // Retourne la réponse si authentification réussie
                } else {
                    reject(response.message); // Retourne le message d'erreur en cas d'échec
                }
            },
            error: function () {
                reject('Une erreur est survenue lors de l\'authentification.'); // Gestion de l'erreur AJAX
            }
        });
    });
}

// Fonction pour récupérer des données (exemple pour récupérer le programme d'études)
function getProgramData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${API_URL}/programs`,
            type: 'GET',
            success: function (response) {
                resolve(response); // Retourne les données du programme
            },
            error: function () {
                reject('Impossible de récupérer les données du programme.');
            }
        });
    });
}

// Fonction pour envoyer une requête de mise à jour des données (exemple : modification d'un syllabus)
function updateSyllabus(id, syllabusData) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${API_URL}/syllabus/${id}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(syllabusData),
            success: function (response) {
                resolve(response); // Retourne la réponse en cas de succès
            },
            error: function () {
                reject('Erreur lors de la mise à jour du syllabus.');
            }
        });
    });
}

// Exemple d'appel pour obtenir les utilisateurs
function getUsers() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${API_URL}/users`,
            type: 'GET',
            success: function (response) {
                resolve(response); // Retourne la liste des utilisateurs
            },
            error: function () {
                reject('Impossible de récupérer la liste des utilisateurs.');
            }
        });
    });
}

// Fonction pour effectuer une déconnexion de l'application
function logout() {
    return new Promise((resolve) => {
        // Logique de déconnexion (par exemple, suppression du token si nécessaire)
        localStorage.removeItem('user'); // Supposons que vous stockiez l'utilisateur dans le localStorage
        resolve('Déconnexion réussie');
    });
}

