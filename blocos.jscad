const jscad = require('@jscad/modeling')
const { cuboid, cylinder, polygon, cube } = jscad.primitives
const { translate, rotate } = jscad.transforms
const { union, subtract, intersect } = jscad.booleans
const { extrudeLinear } = jscad.extrusions
const { colorize, hexToRgb } = jscad.colors

const getParameterDefinitions = () => {
  return [
    { name: 'largura', type: 'int', initial: 10, caption: 'Largura (Módulo):' }, 
    { name: 'altura', type: 'int', initial: 20, caption: 'Altura (Módulo):' },
    { name: 'modulos', type: 'int', initial: 5, caption: 'Módulos:' },
    { name: 'cor', type: 'color', initial: '#FFB431', caption: 'Cor:' },
    { name: 'opcao', type: 'choice', caption: 'Opção:', values: ['Pináculo', 'Relógio', 'Sem adorno'], initial: 'Pináculo' },
    { name: 'blocos', type: 'checkbox', checked: false, caption: 'Exibe blocos:'}
  ]
}

const parede = (l, a) => {
  return cuboid({size: [l, l, a], center: [l/2,l/2,a/2]})
} 

const relogio = (l, a) => {
  // return parede(l, a)
  return subtract(
    parede(l,a), 
    translate([l/2, 0, a - a/3], 
      rotate([Math.PI/2,0,0],
        cylinder({radius: l/3, size: l/5})
      )
    )
  )
}

const pinaculo = (l, a) => {
  return translate([l, l, 0],
    rotate([Math.PI/2, Math.PI/-2,0], 
      extrudeLinear({height: l}, 
        polygon({points: [[0,0], [a, l/2], [0, l]]})
      )
    )
  )
}

const campanario = (l, a) => {
  return subtract(
    union(
      cuboid({size: [l, l, a/2], center: [l/2,l/2,a/4]}),
      translate([l, l, a/2],
        rotate([Math.PI/2, Math.PI/-2,0], 
          extrudeLinear({height: l}, 
            polygon({points: [[0,0], [a/2, l/2], [0, l]]})
          )
        )
      )
    ),
    translate([l/2, 0, a/3],
      rotate([Math.PI/2, 0, 0],
        cylinder({radius: l/3, height: l, center: [0,0,-l/2]})
      )
    )
  )
}

const porta = (l, a) => {
  return subtract(
    parede(l, a),
    union(
      translate([l/4, 0, 0],
        cuboid({size: [l/2, l, a/2], center: [l/4, l/2, a/4]})
      ),
      translate([l/2, 0, a/2],
        rotate([Math.PI/2, 0, 0],
          cylinder({radius: l/4, height: l, center: [0,0,-l/2]})
        )
      )
    )
  )
}

const janela = (l, a) => {
  return subtract(
    parede(l, a),
    union(
      translate([l/4, 0, a/4],
        cuboid({size: [l/2, l, a/4], center: [l/4, l/2, a/6]})
      ),
      translate([l/2, 0, a/2],
        rotate([Math.PI/2, 0, 0],
          cylinder({radius: l/4, height: l, center: [0,0,-l/2]})
        )
      )
    )
  )
}

const blocos = (l, a) => {
  let afastamento = l * 4
  return [translate([0, afastamento, a * 1.5],
    [relogio(l, a),
    translate([l*2, 0, 0], pinaculo(l, a)),
    translate([l*4, 0, 0], campanario(l, a))]
  ),
  translate([0, afastamento, 0],
    [porta(l, a),
    translate([l*2, 0, 0], janela(l, a)),
    translate([l*4, 0, 0], parede(l, a))]
  )]
}

const gera_blocos = (params) => {
  let l = params.largura
  let a = params.altura
  let geometrias = [porta(l, a)]
  console.log(params.blocos)
  if (params.blocos) {
    geometrias.push(blocos(l,a))
  }
  switch (params.opcao) {
    case "Pináculo":
      geometrias.push(
        translate([0, 0, a], pinaculo(l,a))
      )
      break
    case "Relógio":
        geometrias.push(
          translate([0, 0, a], relogio(l,a))
        )
        break
  }
  for (let i = 1; i < params.modulos; i++) {
    geometrias.push(
      translate([l*i, 0, 0], janela(l,a))
    )
    if (i === params.modulos - 1 && params.modulos > 4) {
      geometrias.push(
        translate([l*i, 0, a], campanario(l,a))
      )
    }
  }
  return geometrias
}

const main = (params) => {
  return colorize(hexToRgb(params.cor),
    gera_blocos(params)
  )
}
 
module.exports = { main, getParameterDefinitions }
