pub fn uppercase_first_letter(s: String) -> String {
    let mut s_as_vec: Vec<char> = s.chars().collect();
    s_as_vec[0] = s_as_vec[0].to_uppercase().nth(0).unwrap();

    let result: String = s_as_vec.into_iter().collect();
    result
}
