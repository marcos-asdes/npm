export default function Pages() {

    const questions = [
        {idName:"FirstPage", question:"O que é yarn? Por que ele foi criado? Por que ele não é mais necessário?"},
        {idName:"SecondPage", question:"O que é o package.json e qual sua estrutura?"},
        {idName:"ThirdPage", question:"Como o package.json é alterado ao instalar uma biblioteca?"},
        {idName:"FourthPage", question:"O que é o NPM Semantic Version e qual a diferença de Patch Releases, Minor Releases e Major Releases?"},
        {idName:"FifthPage", question:"Como especificar no package.json a política de update das bibliotecas (1.2.3 vs ~1.2.3 vs ^1.2.3 vs *)?"},
        {idName:"SixthPage", question:"Que problema o arquivo package-lock.json resolve e o que ele contém?"},
        {idName:"SeventhPage", question:"O que é o comando npx e quando usá-lo no lugar de npm install?"},
        {idName:"EighthPage", question:"O que é uma instalação global de biblioteca no npm? (npm install ... -g)"},
        {idName:"NinethPage", question:"Pra que serve o comando npm audit?"}
    ];

    return (
        <>
            {
                questions.map( quest => {
                    const {idName, question} = quest;
                    return <Page id={idName} question={question} /> 
                })
            }
        </>
    )
}