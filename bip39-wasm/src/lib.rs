use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello Bip39-wasm {}", name)
}

#[wasm_bindgen]
fn count_combinations(n: u64, r: u64) -> u64 {
    if r > n {
        0
    } else {
        (1..=r).fold(1, |acc, val| acc * (n - val + 1) / val)
    }
}

#[wasm_bindgen]
fn count_permutations(n: u64, r: u64) -> u64 {
    (n - r + 1..=n).product()
}

fn test_count_permutations(n: u64, r: u64) -> u64 {
    println!("{}", count_combinations(10, 6));
}