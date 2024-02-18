interface computer {
  (name: string, ram: any);
}

const ak: computer = (name,ram) => {
  console.log(`name: ${name}, ram: ${ram}`);
}

ak("ankit",9);