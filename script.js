// Chin-up scoring data
const chinupScoring = {
    20: 100, 19: 95, 18: 90, 17: 85, 16: 80, 15: 75, 14: 70, 13: 65, 12: 60,
    11: 55, 10: 50, 9: 45, 8: 40, 7: 35, 6: 30, 5: 25, 4: 20, 3: 15, 2: 10, 1: 5, 0: 0
};

// Sit-up scoring data
const situpScoring = [
    { reps: 80, score: 100 }, { reps: 79, score: 98 }, { reps: 78, score: 96 },
    { reps: 77, score: 94 }, { reps: 76, score: 92 }, { reps: 75, score: 90 },
    { reps: 74, score: 88 }, { reps: 73, score: 86 }, { reps: 72, score: 84 },
    { reps: 71, score: 82 }, { reps: 70, score: 80 }, { reps: 69, score: 78 },
    { reps: 68, score: 76 }, { reps: 67, score: 74 }, { reps: 66, score: 72 },
    { reps: 65, score: 70 }, { reps: 64, score: 68 }, { reps: 63, score: 66 },
    { reps: 62, score: 64 }, { reps: 61, score: 62 }, { reps: 60, score: 60 },
    { reps: 59, score: 59 }, { reps: 58, score: 58 }, { reps: 57, score: 57 },
    { reps: 56, score: 56 }, { reps: 55, score: 55 }, { reps: 54, score: 54 },
    { reps: 53, score: 53 }, { reps: 52, score: 52 }, { reps: 51, score: 51 },
    { reps: 50, score: 50 }, { reps: 49, score: 49 }, { reps: 48, score: 48 },
    { reps: 47, score: 47 }, { reps: 46, score: 46 }, { reps: 45, score: 45 },
    { reps: 44, score: 44 }, { reps: 43, score: 43 }, { reps: 42, score: 42 },
    { reps: 41, score: 41 }, { reps: 40, score: 40 }, { reps: 39, score: 39 },
    { reps: 38, score: 38 }, { reps: 37, score: 37 }, { reps: 36, score: 36 },
    { reps: 35, score: 35 }, { reps: 34, score: 34 }, { reps: 33, score: 33 },
    { reps: 32, score: 32 }, { reps: 31, score: 31 }, { reps: 30, score: 30 },
    { reps: 29, score: 29 }, { reps: 28, score: 28 }, { reps: 27, score: 27 },
    { reps: 26, score: 26 }, { reps: 25, score: 25 }, { reps: 24, score: 24 },
    { reps: 23, score: 23 }, { reps: 22, score: 22 }, { reps: 21, score: 21 },
    { reps: 20, score: 20 }, { reps: 19, score: 19 }, { reps: 18, score: 18 },
    { reps: 17, score: 17 }, { reps: 16, score: 16 }, { reps: 15, score: 15 },
    { reps: 14, score: 14 }, { reps: 13, score: 13 }, { reps: 12, score: 12 },
    { reps: 11, score: 11 }, { reps: 10, score: 10 }, { reps: 9, score: 9 },
    { reps: 8, score: 8 }, { reps: 7, score: 7 }, { reps: 6, score: 6 },
    { reps: 5, score: 5 }, { reps: 4, score: 4 }, { reps: 3, score: 3 },
    { reps: 2, score: 2 }, { reps: 1, score: 1 }, { reps: 0, score: 0 }
  
];
// Run scoring data
const runScoring = [
    { maxTime: 14 * 60 + 0, score: 100 },
    { maxTime: 14 * 60 + 6, score: 99 },
    { maxTime: 14 * 60 + 12, score: 98 },
    { maxTime: 14 * 60 + 18, score: 97 },
    { maxTime: 14 * 60 + 24, score: 96 },
    { maxTime: 14 * 60 + 30, score: 95 },
    { maxTime: 14 * 60 + 36, score: 94 },
    { maxTime: 14 * 60 + 42, score: 93 },
    { maxTime: 14 * 60 + 48, score: 92 },
    { maxTime: 14 * 60 + 54, score: 91 },
    { maxTime: 15 * 60 + 0, score: 90 },
    { maxTime: 15 * 60 + 6, score: 89 },
    { maxTime: 15 * 60 + 12, score: 88 },
    { maxTime: 15 * 60 + 18, score: 87 },
    { maxTime: 15 * 60 + 24, score: 86 },
    { maxTime: 15 * 60 + 30, score: 85 },
    { maxTime: 15 * 60 + 36, score: 84 },
    { maxTime: 15 * 60 + 42, score: 83 },
    { maxTime: 15 * 60 + 48, score: 82 },
    { maxTime: 15 * 60 + 54, score: 81 },
    { maxTime: 16 * 60 + 0, score: 80 },
    { maxTime: 16 * 60 + 6, score: 79 },
    { maxTime: 16 * 60 + 12, score: 78 },
    { maxTime: 16 * 60 + 18, score: 77 },
    { maxTime: 16 * 60 + 24, score: 76 },
    { maxTime: 16 * 60 + 30, score: 75 },
    { maxTime: 16 * 60 + 36, score: 74 },
    { maxTime: 16 * 60 + 42, score: 73 },
    { maxTime: 16 * 60 + 48, score: 72 },
    { maxTime: 16 * 60 + 54, score: 71 },
    { maxTime: 17 * 60 + 0, score: 70 },
    { maxTime: 17 * 60 + 6, score: 69 },
    { maxTime: 17 * 60 + 12, score: 68 },
    { maxTime: 17 * 60 + 18, score: 67 },
    { maxTime: 17 * 60 + 24, score: 66 },
    { maxTime: 17 * 60 + 30, score: 65 },
    { maxTime: 17 * 60 + 36, score: 64 },
    { maxTime: 17 * 60 + 42, score: 63 },
    { maxTime: 17 * 60 + 48, score: 62 },
    { maxTime: 17 * 60 + 54, score: 61 },
    { maxTime: 18 * 60 + 0, score: 60 },
    { maxTime: 18 * 60 + 6, score: 59 },
    { maxTime: 18 * 60 + 12, score: 58 },
    { maxTime: 18 * 60 + 18, score: 57 },
    { maxTime: 18 * 60 + 24, score: 56 },
    { maxTime: 18 * 60 + 30, score: 55 },
    { maxTime: 18 * 60 + 36, score: 54 },
    { maxTime: 18 * 60 + 42, score: 53 },
    { maxTime: 18 * 60 + 48, score: 52 },
    { maxTime: 18 * 60 + 54, score: 51 },
    { maxTime: 19 * 60 + 0, score: 50 },
    { maxTime: 19 * 60 + 6, score: 49 },
    { maxTime: 19 * 60 + 12, score: 48 },
    { maxTime: 19 * 60 + 18, score: 47 },
    { maxTime: 19 * 60 + 24, score: 46 },
    { maxTime: 19 * 60 + 30, score: 45 },
    { maxTime: 19 * 60 + 36, score: 44 },
    { maxTime: 19 * 60 + 42, score: 43 },
    { maxTime: 19 * 60 + 48, score: 42 },
    { maxTime: 19 * 60 + 54, score: 41 },
    { maxTime: 20 * 60 + 0, score: 40 },
    { maxTime: 20 * 60 + 6, score: 39 },
    { maxTime: 20 * 60 + 12, score: 38 },
    { maxTime: 20 * 60 + 18, score: 37 },
    { maxTime: 20 * 60 + 24, score: 36 },
    { maxTime: 20 * 60 + 30, score: 35 },
    { maxTime: 20 * 60 + 36, score: 34 },
    { maxTime: 20 * 60 + 42, score: 33 },
    { maxTime: 20 * 60 + 48, score: 32 },
    { maxTime: 20 * 60 + 54, score: 31 },
    { maxTime: 21 * 60 + 0, score: 30 },
    { maxTime: 21 * 60 + 6, score: 29 },
    { maxTime: 21 * 60 + 12, score: 28 },
    { maxTime: 21 * 60 + 18, score: 27 },
    { maxTime: 21 * 60 + 24, score: 26 },
    { maxTime: 21 * 60 + 30, score: 25 },
    { maxTime: 21 * 60 + 36, score: 24 },
    { maxTime: 21 * 60 + 42, score: 23 },
    { maxTime: 21 * 60 + 48, score: 22 },
    { maxTime: 21 * 60 + 54, score: 21 },
    { maxTime: 22 * 60 + 0, score: 20 },
    { maxTime: 22 * 60 + 6, score: 19 },
    { maxTime: 22 * 60 + 12, score: 18 },
    { maxTime: 22 * 60 + 18, score: 17 },
    { maxTime: 22 * 60 + 24, score: 16 },
    { maxTime: 22 * 60 + 30, score: 15 },
    { maxTime: 22 * 60 + 36, score: 14 },
    { maxTime: 22 * 60 + 42, score: 13 },
    { maxTime: 22 * 60 + 48, score: 12 },
    { maxTime: 22 * 60 + 54, score: 11 },
    { maxTime: 23 * 60 + 0, score: 10 },
    { maxTime: 23 * 60 + 6, score: 9 },
    { maxTime: 23 * 60 + 12, score: 8 },
    { maxTime: 23 * 60 + 18, score: 7 },
    { maxTime: 23 * 60 + 24, score: 6 },
    { maxTime: 23 * 60 + 30, score: 5 },
    { maxTime: 23 * 60 + 36, score: 4 },
    { maxTime: 23 * 60 + 42, score: 3 },
    { maxTime: 23 * 60 + 48, score: 2 },
    { maxTime: 23 * 60 + 54, score: 1 },
];
// Age categories and Grade A thresholds
const ageCategories = [
    { minAge: 0, maxAge: 24, gradeA: 250 },
    { minAge: 25, maxAge: 29, gradeA: 240 },
    { minAge: 30, maxAge: 34, gradeA: 230 },
    { minAge: 35, maxAge: 39, gradeA: 210 },
    { minAge: 40, maxAge: 44, gradeA: 200 },
    { minAge: 45, maxAge: 49, gradeA: 180 },
    { minAge: 50, maxAge: 100, gradeA: 170 }
];

// Function to calculate scores
function calculateScores() {
    let age = parseInt(document.getElementById("age").value) || 18;
    let chinups = parseInt(document.getElementById("chinups").value) || 0;
    let situps = parseInt(document.getElementById("situps").value) || 0;
    let runtime = document.getElementById("runtime").value || "99:99";

    // Get scores for chin-ups and sit-ups
    let chinupScore = chinupScoring[chinups] || 0;
    let situpScore = situpScoring.find(entry => entry.reps === situps)?.score || 0;

    // Determine Grade A threshold based on age
    let gradeAThreshold = ageCategories.find(category => age >= category.minAge && age <= category.maxAge)?.gradeA || 250;

    // Run time processing
    const [runMinutes, runSeconds] = runtime.split(":").map(Number);
    const totalRunTime = (!isNaN(runMinutes) && !isNaN(runSeconds)) ? runMinutes * 60 + runSeconds : 9999;

    // Find run score
    let runScore = 0;
    for (const entry of runScoring) {
        if (totalRunTime <= entry.maxTime) {
            runScore = entry.score;
            break;
        }
    }

    // Calculate total score
    let totalScore = chinupScore + situpScore + runScore;
    let pointsToGradeA = Math.max(gradeAThreshold - totalScore, 0);
  
    // Determine if user achieved Grade A
    let gradeAStatus = totalScore >= gradeAThreshold ? "🎉 Congratulations! You achieved Grade A! 🎉" : "";

    // Suggested Run Time Calculation (Find the closest match)
    let suggestedRunTime = "N/A";
    if (pointsToGradeA > 0) {
        let closestEntry = runScoring.reduce((closest, entry) => {
            return Math.abs(entry.score - pointsToGradeA) < Math.abs(closest.score - pointsToGradeA) ? entry : closest;
        }, runScoring[0]); // Start with the first entry

        const minutes = Math.floor(closestEntry.maxTime / 60);
        const seconds = closestEntry.maxTime % 60;
        suggestedRunTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    // Display results in the popup
    let resultPopup = document.getElementById("resultPopup");
    document.getElementById("resultDetails").innerHTML = `
        <p><strong>Chin-ups Score:</strong> ${chinupScore}</p>
        <p><strong>Sit-ups Score:</strong> ${situpScore}</p>
        <p><strong>Run Score:</strong> ${runScore}</p>
        <p><strong>Total Score:</strong> ${totalScore}</p>
        <p><strong>Required Score for Grade A:</strong> ${gradeAThreshold}</p>
        <p><strong>Points Needed for Grade A:</strong> ${pointsToGradeA}</p>
        <p><strong>Suggested Run Time to Achieve Grade A:</strong> ${suggestedRunTime}</p>
        <p style="color: green; font-weight: bold;">${gradeAStatus}</p>
    `;

    resultPopup.style.display = "block"; // Show the popup
}

// Function to close the popup
function closePopup() {
    document.getElementById("resultPopup").style.display = "none";
}
