Quotes = [
    {'author': 'Marcus Tullius Cicero', 
     'quote': '“A room without books is like a body without a soul.”'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': '“Be the change that you wish to see in the world.”'
    },
    {'author': 'Friedrich Nietzsche, Twilight of the Idols', 
     'quote': '“Without music, life would be a mistake.”'
    },
    {'author': 'Wayne Gretzy', 
     'quote': '“You miss 100% of the shots you don\'t take.”'
    },
    {'author': 'Nelson Mandela', 
     'quote': '“Insanity is doing the same thing, over and over again, but expecting different results.”'
    },
    {'author': 'Elbert Hubbard', 
     'quote': '“Do not take life too seriously. You will not get out alive.”'
    },
];

var lastRandom = -1 ;

function generateQuote()
{
    
    var random ;
    
     do{
        
        random = Number.parseInt(Math.random()*Quotes.length);

     } while ( random === lastRandom)

    lastRandom = random ; 
    
    document.querySelector('#quoteOutput').innerHTML= `${Quotes[random].quote}`;
    document.querySelector('#authorOutput').innerHTML = `${Quotes[random].author}`;
    
}







