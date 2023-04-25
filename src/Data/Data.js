import elektromed from './elektromed.jpg';
import podwykonawca from './podwykonawca.jpg'
import rock from './rockPaperScissor.jpg'
import simon from './simon.jpg'
import tinDog from './TinDog.jpg'
import htl from './HTL.jpg'
import portfolio from './portoflio.jpg'

export const DataProjects = [ 
  {
      id: 1,
      photo:process.env.PUBLIC_URL + portfolio,
      link: 'https://gentle-mud-09bce1410.3.azurestaticapps.net/',
      name: 'Portfolio',
      about:
          'Portfolio to projekt zrealizowany w React. Projekt ten jest wykonany w formie aplikacji typu single page, co oznacza, że użytkownik może przeglądać zawartość strony bez konieczności przeładowywania całej strony, co przyczynia się do szybszego i bardziej płynnego użytkowania.',
      code:'https://github.com/RobertTwardowski/portfolio',
      },
  {
        id: 2,
        photo:process.env.PUBLIC_URL + podwykonawca,
        link: 'https://roberttwardowski.github.io/Podwykonawca',
        name: 'Podwykonawca',
        about:
        'Podwykonawca to projekt, który został napisany w jednym z najnowocześniejszych frameworków frontendowych - React.Projekt znajduje się w fazie produkcji. Głównym celem tego projektu jest umożliwienie użytkownikom dodawania ogłoszeń oraz wyszukiwania odpowiedniego podwykonawcy.'
        ,
        code:'https://github.com/RobertTwardowski/Podwykonawca',
        },
  {
    id: 3,
    photo:process.env.PUBLIC_URL +elektromed,
    link: 'https://roberttwardowski.github.io/Elektromed/',
    name: 'Elektromed',
    about:
      'Strona internetowa dla firmy elektrycznej, stworzona z użyciem HTML, CSS i JavaScript, to wizytówka firmy w internecie. Projekt ten pozwala na ćwiczyczenie rozkładu treści na stronie oraz zastosowanie JavaScriptu dla poprawienia funkcjonalności strony. Wykorzystanie tych technologii pozwoli na stworzenie przejrzystego i estetycznego interfejsu użytkownika oraz łatwej nawigacji po różnych sekcjach strony.'
,code:'https://github.com/RobertTwardowski/Elektromed'  
    }
    ,
   
        {
            id: 4,
            photo:process.env.PUBLIC_URL + rock,
            link: 'https://roberttwardowski.github.io/RockPaperScissor/',
            name: 'RockPaperScissor',
            about:
              'Projekt napisany w czystym JavaScript to gra Rock Paper Scissors, czyli popularna zabawa w kamień, papier, nożyce. Ta wciągająca gra umożliwia rywalizację gracza z graczem, a także oferuje mnóstwo zabawy i emocji. Dzięki zastosowaniu czystego JavaScriptu, ta gra charakteryzuje się nie tylko wyjątkową funkcjonalnością, ale także szybkim i płynnym interfejsem użytkownika.'
        ,code:'https://github.com/RobertTwardowski/RockPaperScissor'  
            } , {
              id: 5,
              photo:process.env.PUBLIC_URL + simon,
              link: 'https://roberttwardowski.github.io/simon-Game',
              name: 'SimonGame',
              about:
                'Simon Game to wciągająca gra, która polega na zapamiętywaniu kolejności kolorów i dźwięków, które generuje gra. Im dalej w grze, tym trudniejsze stają się kolejne poziomy, a gracz musi wykazać się coraz większą koncentracją i spostrzegawczością, aby osiągnąć sukces. Ta wspaniała gra została napisana w czystym JavaScript, co zapewnia płynne działanie i szybkie reakcje na akcje gracza.'
          ,code:'https://github.com/RobertTwardowski/simon-Game'  
              },  {
                id: 6,
                photo:process.env.PUBLIC_URL + tinDog,
                link: 'https://roberttwardowski.github.io/TinyDog/',
                name: 'tinDog',
                about:
                  'TinDog to projekt, który powstał z wykorzystaniem jednego z najpopularniejszych frameworków CSS - Bootstrap. Dzięki zastosowaniu tej zaawansowanej technologii, projekt ten charakteryzuje się nie tylko wyjątkową funkcjonalnością, ale także estetycznym i przejrzystym interfejsem użytkownika.'
            ,code:'https://github.com/RobertTwardowski/TinyDog'  
                },  {
                  id: 7,
                  photo:process.env.PUBLIC_URL + htl,
                  link: 'https://roberttwardowski.github.io/Hotel/',
                  name: 'HTL Hotel',
                  about:
                    'Projekt strony dla Hotelu napisany w HTML i CSS. Ta wspaniała strona internetowa została stworzona z myślą o zapewnieniu użytkownikom szybkiego i łatwego dostępu do informacji na temat usług oferowanych przez hotel. Dzięki zastosowaniu HTML i CSS, projekt ten charakteryzuje się eleganckim i przyjaznym dla użytkownika interfejsem, który pozwala na łatwe poruszanie się po stronie i szybkie znalezienie potrzebnych informacji.'
              ,code:'https://github.com/RobertTwardowski/Hotel'  
                  }
]
