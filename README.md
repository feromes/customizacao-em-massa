# Customização em massa

Repositório de demonstração dos recursos básicos do JSCad para customização em massa no Design e Arquitetura Digital.

## Motivação

Durante a disciplina de Customização em Massa do curso de pós graduação em Arquitetura Digital e Projetos Paramétricos, no Centro Universitário Belas Artes de São Paulo, o Prof. Dr. Luiz Alberto Fresl Backheuser, a partir da sua [tese de doutorado](https://www.teses.usp.br/teses/disponiveis/16/16134/tde-29032021-011814/pt-br.php) propõe exercitar a customização de produto ou arquitetura. A proposta é utilizar qualquer ferramenta digital que possibilite essa customização, exemplificando o processo com uma estratégia de definição no GrassHopper afim de configurar um pequeno jogo de montagem de blocos com uma regra definida.

A ideia desse repositório portanto é de inicialmente transcrever esse exercício de customização para uma ferramenta de software livre e no contexto da arquitetura de sistemas Web e assim, permitir que novas possibilidades para que as próximas turmas possam, a partir desse exemplo, desenvolver exercícios prontos para Web e com um paradgma de programação em javascript.

De certa forma, a hipótese levantada aqui é a possibilidade de customizar arquitetura e produtos diretamente pelo Browser com linguagens de programação de código aberto.

## Introdução ao CSG

[CSG (Constructive solid geometry)](https://en.wikipedia.org/wiki/Constructive_solid_geometry) é uma técnica de modelagem 3D que usa prodecimentos booleanos para a criação de formas complexas. Um aspecto interessante do CSG é que ele é procedural e de certa forma mantem documentada a forma que o modelo foi concebido. 

O [OpensCAD](https://www2.openscad.org/) é uma projeto de código aberto que implementa o paradigma de modelagem CSG através de uma [liguagem de programação funcional](https://en.wikipedia.org/wiki/Functional_programming). No entanto, o OpensCAD necessita, a grosso modo, de um programa instalado na máquina para interpretar o código e gerar o modelo 3D.

O [Thingsverse utiliza OpensCAD para customizar modelos 3D](https://www.thingiverse.com/customizer). A partir do upload de arquivos contendo código OpensCAD é possível ter um modelo inteiramente customizável. Apesar que nos pareceu uma experiência de navegação um tanto quanto lenta.

A partir dos conceitos de CSG e plataforma WEB o projeto [JSCad que antes se chamava OpenJSCad](https://openjscad.xyz/) parece bastante promissor, com um interpretador rápido e uma linguagem que acaba utilizando conceitos de linguagem de programação funcional e os recursos e facilidade do JAvaScript, bastante conhecido.

## Materiais e métodos

O experimento incialmente proposto é a conversão do modelo de jogo de blocos proposto pelo Prof. Luiz em GRassHoper para o Browser utilizando JSCad. Para isso é necessário um conhecimento básico de tecologias Web como HTML e Javascript, além de noções básicas de programação, como variáveis, loops e listas.

A única biblioteca utilizada será o JSCad que pode ser instalado com o seguinte comando:

``npm install @jscad``

No entanto, não é necessário a instalação localmente, pois, como o código pode ser executado e alterado diretamente no Browser isso pode ser relizado diretamente [aqui]() e copiando o código disponível no arquivo compartilhado [aqui]()

## Resultados

O resultado apresentado [aqui]() inicialmente é o jogo de blocos traduzido e acessível pelo Browser diretamento por esse [link]()

Além do resultado prático que possibilita ver as modificações no modelo a partir da modificação dos parâmetros, é possível estudar o código e a partir de modificações, adaptações compreender a estratégia utilizada para ter autonomia de resolver os problemas a partir de uma visão particular. Ou seja, é saber das possibilidade a partir de um ferramental estabelecido, o código, e com isso ser capaz de resolver os próximos problemas de forma autônoma. Que tal experimentar? 

É possível fazer essas modificações diretamente pelo browser, ou ainda clonar esse repositório e usitilizar uma IDE para criar seus próprios modelos.

## Possíveis limitações

Da forma com que utilizamos nosso experimento, estamos limitados à utilização do interpretador do site externo. No entanto, é possível criar e hospedear a partir do projeto do JSCad o mesmo interpretador. Mesmo assim, ficamos limitados ao uso da biblioteca JSCad, o que impossibilita, por exemplo, usar materiais texturizados e um ambiente renderizado.

É possível notar que CSG se torna menos eficiente computacionalmente, a medida que o modelo cresce em tamanho e mais calculos são necessários para a renderização do modelo. Isso pode inviabilizar modelos muito complexos e níveis de detalhamento que exisgem dezenas ou mesmo centenas de peças.

## Próximos passos

Os resultados apresentados aqui são lúdicos. Apesar de apresentarem a maioria dos recursos necessários para o desenvolvimento de aplicações práticas ele ainda está limitado a um jogo. O próximos passos seriam no caminho de desenvolvimento de aplicações práticas que possibilitem a produção de algo customizável, seja para corte em CNC, impressão 3D, produção de conteúdo como plantas de layout, cortes e elevações para poder assim validar e testar a performance para esse tipo de aplicação.

Uma outra abordagem é a integração de outras bibliotecas em JavaScript para ir além do CSG, talvez até com processamento do lado do servidor. Além disso, a possiblidade de usar a customização em WebSites integrados com outras aplicações como bases de dados, redes sociais, etc ...

## Como contribuir

Este repositório possui licensa criativa e pode ser copiado, distribuido, compartilhado e modificado livremente. A melhor maneira de contribuir é sobretudo tentar executa-lo localmente, compreende-lo e a partir dele criar novas possibildiades. Dessa forma é possível validar novos usos e compartilhar conosco o conhecimento adquirido. Afinal é assim que a ciência flui.

