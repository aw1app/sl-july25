
/**
 * Calculates and displays the total sum and average of an array of numerical scores.
 * 
 * This function iterates through the provided array of scores, computes their sum,
 * calculates the average, and outputs both values to the console.
 * 
 * @param {number[]} scores - An array of numerical values representing scores
 * @returns {void} This function doesn't return a value, it logs results to console
 * 
 * @example
 * // Calculate statistics for test scores
 * calculateStatistics([85, 92, 78, 96, 88]);
 * // Output: Total: 439 Average: 87.8
 * 
 * @example
 * // Calculate statistics for a small dataset
 * calculateStatistics([10, 20, 30, 40]);
 * // Output: Total: 100 Average: 25
 * 
 * @example
 * // Handle single value
 * calculateStatistics([100]);
 * // Output: Total: 100 Average: 100
 * 
 * @since 1.0.0
 * @author Your Name
 */
function calculateStatistics(scores) {
    // Input validation
    if (!scores) {
        console.error('Error: Input cannot be null or undefined');
        return;
    }
    
    if (!Array.isArray(scores)) {
        console.error('Error: Input must be an array');
        return;
    }
    
    if (scores.length === 0) {
        console.log('Warning: Empty array provided. Total: 0, Average: 0');
        return;
    }
    
    let total = 0, average;
    let validNumbers = 0;
    
    for (let i = 0; i < scores.length; i++) {
        if (typeof scores[i] !== 'number' || isNaN(scores[i])) {
            console.warn(`Warning: Non-numeric value "${scores[i]}" at index ${i} will be skipped`);
            continue;
        }
        total += scores[i];
        validNumbers++;
    }
    
    if (validNumbers === 0) {
        console.error('Error: No valid numeric values found in array');
        return;
    }
    
    average = total / validNumbers;
    console.log('Total:', total, 'Average:', average, `(${validNumbers} valid numbers)`);
}


// sample usage
calculateStatistics([10, 20, 30, 40]);

// Test edge cases
console.log('\n--- Testing Edge Cases ---');
calculateStatistics([]);                    // Empty array
calculateStatistics(null);                  // Null input
calculateStatistics("not array");           // Non-array input
calculateStatistics([10, "hello", 30]);     // Mixed types
calculateStatistics([NaN, null, undefined]); // Invalid numbers
