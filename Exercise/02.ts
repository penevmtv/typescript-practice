enum Direction {
  east,
  west,
  north,
  south
}

function move(direction: Direction): string {
  let moved: 'up' | 'down' | 'right' | 'left';
  
  switch (direction) {
    case Direction.east:
      moved = 'right';
      break;
    case Direction.west:
      moved = 'left';
      break;
    case Direction.north:
      moved = 'up';
      break;
    case Direction.south:
      moved = 'down';
      break;
  }
  return `You moved ${moved}`;
}

console.log(move(Direction.east));
