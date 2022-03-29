const leap = (year: number) => {
    return (divides_by(year, 4) && !divides_by(year, 100)) || divides_by(year, 400)
}

const divides_by = (i: number, d: number) => i % d === 0

export { leap }