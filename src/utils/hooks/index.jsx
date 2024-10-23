// Importation de hooks React utilisés dans les fonctions ci-dessous
import { useState, useEffect, useContext } from 'react'

// Importation du contexte ThemeContext pour accéder au thème actuel et à la fonction permettant de le changer
import { ThemeContext } from '../context'

// Définition du hook personnalisé useFetch, qui permet de faire une requête HTTP GET et de gérer son état (chargement, données, erreurs)
export function useFetch(url) {
  // Définition d'un état 'data' pour stocker les données récupérées via la requête
  const [data, setData] = useState({})

  // Définition d'un état 'isLoading' pour indiquer si les données sont en cours de chargement
  const [isLoading, setLoading] = useState(true)

  // Définition d'un état 'error' pour indiquer si une erreur est survenue lors de la requête
  const [error, setError] = useState(false)

  // Utilisation du hook useEffect pour déclencher un effet de récupération des données à chaque fois que l'URL change
  useEffect(() => {
    // Si l'URL n'est pas définie, on arrête l'exécution
    if (!url) return

    // Le chargement commence, on réinitialise les états 'isLoading' et 'error'
    setLoading(true)

    // Définition d'une fonction asynchrone pour effectuer la requête et gérer les résultats
    async function fetchData() {
      try {
        // Envoi d'une requête GET vers l'URL fournie
        const response = await fetch(url)

        // Conversion de la réponse en format JSON
        const data = await response.json()

        // Mise à jour de l'état 'data' avec les données récupérées
        setData(data)
      } catch (err) {
        // Si une erreur survient, on l'affiche dans la console et on met l'état 'error' à true
        console.log(err)
        setError(true)
      } finally {
        // Une fois la requête terminée (qu'elle ait réussi ou échoué), on met fin au chargement
        setLoading(false)
      }
    }

    // Appel de la fonction asynchrone pour récupérer les données
    fetchData()

  // Le hook useEffect dépend de l'URL, donc il sera relancé chaque fois que l'URL change
  }, [url])

  // Le hook retourne un objet contenant l'état du chargement, les données récupérées, et une éventuelle erreur
  return { isLoading, data, error }
}

// Définition du hook personnalisé useTheme pour accéder au thème actuel et à la fonction pour le changer
export function useTheme() {
  // Récupération du contexte ThemeContext avec useContext
  // ThemeContext fournit le thème actuel (theme) et une fonction pour le basculer (toggleTheme)
  const { theme, toggleTheme } = useContext(ThemeContext)

  // Le hook retourne un objet contenant le thème actuel et la fonction pour basculer entre les thèmes
  return { theme, toggleTheme }
}

/*********************************************************************************************
 * Explication détaillée :
useFetch(url) :

C'est un hook personnalisé qui permet d'effectuer une requête HTTP à une URL donnée et de gérer les états liés (chargement, données, et erreurs).
États gérés :
data : Stocke les données récupérées depuis l'API.
isLoading : Booléen qui indique si la requête est en cours.
error : Booléen qui indique si une erreur est survenue pendant la requête.
useEffect :
Le hook useEffect est utilisé pour effectuer la requête dès que l'URL change.
Si l'URL est fournie, la fonction fetchData est déclenchée pour récupérer les données et gérer les erreurs.
Retour du hook :
Le hook retourne un objet contenant isLoading, data, et error, que les composants peuvent utiliser pour afficher l'état de la requête, les données, ou une erreur.
useTheme() :

Ce hook permet d'accéder au thème de l'application (clair ou sombre) et à la fonction pour basculer entre les thèmes, via le contexte ThemeContext.
useContext(ThemeContext) :
Utilisation du hook useContext pour récupérer le contexte ThemeContext, qui contient deux éléments :
theme : Le thème actuel (par exemple 'dark' ou 'light').
toggleTheme : Une fonction permettant de changer le thème.
Retour du hook :
Le hook retourne un objet avec le thème actuel et la fonction pour basculer le thème, ce qui peut être utilisé dans les composants pour gérer les thèmes dynamiquement.
Conclusion :
useFetch : Ce hook gère la logique de récupération des données via une API, avec des états pour indiquer si la requête est en cours, si elle a réussi ou échoué.
useTheme : Ce hook donne accès au thème actuel de l'application et à la possibilité de basculer entre les thèmes via le contexte de l'application.
Ces deux hooks permettent de gérer des aspects importants d'une application : la récupération des données et le changement de thème.
 */