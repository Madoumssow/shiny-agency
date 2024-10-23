// Importation de la fonction createGlobalStyle de styled-components
// Cette fonction permet de créer des styles globaux qui s'appliquent à l'ensemble de l'application
import { createGlobalStyle } from 'styled-components'

// Importation du hook personnalisé useTheme, qui permet d'accéder au thème (sombre ou clair) de l'application
import { useTheme } from '../hooks'

// Création d'un composant StyledGlobalStyle utilisant createGlobalStyle
// Ce composant définit des styles globaux qui s'appliquent à tous les éléments de la page
const StyledGlobalStyle = createGlobalStyle`
    * {
      // Applique la police 'Trebuchet MS' à tous les éléments (*) de la page, avec des polices de secours en cas d'indisponibilité
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        // La couleur d'arrière-plan du body dépend du mode sombre ou clair (basé sur la prop isDarkMode)
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'}; // Si isDarkMode est vrai, le fond devient sombre, sinon blanc
        margin: 0; // Supprime la marge par défaut du body pour éviter les espaces indésirables autour de la page
    }
`

// Définition du composant GlobalStyle qui applique les styles globaux à l'application
function GlobalStyle() {
  // Utilisation du hook useTheme pour récupérer l'objet theme depuis le contexte
  // theme contient la valeur 'dark' ou 'light' selon le thème actuel (sombre ou clair)
  const { theme } = useTheme()

  // Le composant StyledGlobalStyle est rendu avec une prop isDarkMode
  // Cette prop est évaluée à true si le thème est 'dark', sinon elle est false
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

// Exportation par défaut du composant GlobalStyle pour pouvoir l'utiliser dans d'autres fichiers de l'application
export default GlobalStyle

/**************************************************************************************************
 * Explication détaillée :
createGlobalStyle :

Cette fonction de styled-components permet de définir des styles CSS globaux qui affecteront l'ensemble de l'application. Contrairement aux composants stylisés classiques, ces styles ne sont pas limités à un élément particulier, mais s'appliquent à tous les éléments de la page.
Ici, vous définissez une règle qui applique une police de caractères spécifique à tous les éléments (*), et une règle pour le fond du body de la page.
Styles globaux :

Police globale : Le style font-family est appliqué à tous les éléments, garantissant que tous les textes de l'application utilisent la police "Trebuchet MS", ou les polices de secours si celle-ci n'est pas disponible.
Body : Le background-color du body dépend d'une condition, basée sur la prop isDarkMode. Si isDarkMode est vrai (mode sombre), le fond du body est un gris foncé #2F2E41. Sinon, il est blanc.
Composant GlobalStyle :

Ce composant fonctionne comme un wrapper pour appliquer les styles globaux définis dans StyledGlobalStyle.
useTheme() : Ce hook personnalisé permet d'accéder au thème actuel (clair ou sombre) via un contexte. Ici, il récupère la valeur theme (qui peut être 'light' ou 'dark').
Le composant retourne le composant StyledGlobalStyle et lui passe une prop isDarkMode. Cette prop est calculée dynamiquement : elle sera vraie si le thème est 'dark', et fausse sinon. Cela permet de changer automatiquement l'arrière-plan de l'application selon le thème choisi.
Exportation du composant GlobalStyle :

GlobalStyle est exporté pour pouvoir être utilisé dans d'autres parties de l'application. En l'incluant dans la hiérarchie de rendu, les styles globaux s'appliquent à l'ensemble de l'application.
Conclusion :
Ce code utilise styled-components pour gérer des styles globaux dans l'application. En fonction du thème (clair ou sombre), déterminé par le hook useTheme, il applique une couleur d'arrière-plan appropriée pour le body. Le fait de centraliser les styles globaux de cette manière facilite la gestion des thèmes dans l'ensemble de l'application.







 */