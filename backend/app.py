# Import necessary libraries
import pandas as pd                           # For data handling (loading, manipulation)
from sklearn.model_selection import train_test_split   # For splitting data into training and test sets
from sklearn.feature_extraction.text import TfidfVectorizer   # For converting text data into numerical form
from sklearn.naive_bayes import MultinomialNB   # Naive Bayes classifier
from sklearn.ensemble import RandomForestClassifier   # Random Forest classifier
from sklearn.ensemble import VotingClassifier  # To combine Naive Bayes and Random Forest
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix  # For model evaluation
import joblib  # For saving and loading models

# Step 1: Load your dataset
df = pd.read_csv('spam_dataset.csv')  # Make sure to provide the correct path to your dataset

# Step 2: Data Exploration (Optional)
# Check the first few rows of the dataset to ensure it's loaded correctly
print(df.head())

# Ensure the dataset has columns: 'text' for email content and 'label' for classification (spam/ham)
# Example:
# | text                             | label   |
# |----------------------------------|---------|
# | "Congratulations! You've won..." | spam    |
# | "Hi, can we reschedule the meeting?" | ham    |

# Step 3: Data Preprocessing
# Convert the label column (spam/ham) to binary: ham -> 0, spam -> 1
df['label'] = df['label'].map({'ham': 0, 'spam': 1})

# Split the data into features (X) and target (y)
X = df['text']  # 'text' contains the email content
y = df['label']  # 'label' contains the classification (0 for ham, 1 for spam)

# Split the data into training and testing sets (80% training, 20% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 4: Convert Text Data into Numerical Form
# We'll use TF-IDF (Term Frequency-Inverse Document Frequency) for this transformation
vectorizer = TfidfVectorizer(stop_words='english')  # Remove common stop words like 'the', 'and', etc.
X_train_vec = vectorizer.fit_transform(X_train)  # Fit and transform training data
X_test_vec = vectorizer.transform(X_test)  # Only transform the test data (avoid data leakage)

# Step 5: Define the Models (Naive Bayes and Random Forest)
# Naive Bayes Model (Multinomial Naive Bayes works well for text classification)
nb_model = MultinomialNB()

# Random Forest Model (with 100 decision trees)
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)

# Step 6: Combine Models into a Voting Classifier
# This combines both models into a hybrid model using "hard" voting
# The majority vote from the two classifiers will be the final prediction
hybrid_model = VotingClassifier(
    estimators=[('nb', nb_model), ('rf', rf_model)],  # The two classifiers
    voting='hard'  # Use hard voting (majority voting for class predictions)
)

# Step 7: Train the Hybrid Model
# Train the combined model using the training data
hybrid_model.fit(X_train_vec, y_train)

# Step 8: Evaluate the Model on the Test Data
# Make predictions on the test data
y_pred = hybrid_model.predict(X_test_vec)

# Step 9: Model Evaluation
# Evaluate the accuracy of the model
print("Accuracy:", accuracy_score(y_test, y_pred))

# Confusion Matrix: shows the count of true positives, false positives, etc.
print("\nConfusion Matrix:\n", confusion_matrix(y_test, y_pred))

# Classification Report: provides precision, recall, f1-score for each class (spam/ham)
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Step 10: Save the Model (Optional)
# Save the trained hybrid model to a file for later use
joblib.dump(hybrid_model, 'spam_classifier_model.pkl')

# Step 11: Loading the Saved Model (Optional)
# If you want to load the saved model and use it again without retraining, you can do the following:
# loaded_model = joblib.load('spam_classifier_model.pkl')

# Step 12: Predicting a New Email (Optional)
# Example: Predicting if a new email is spam or ham
new_email = ["Can we have a meeting Today ?"]  # A sample spam email

# Preprocess the new email using the same vectorizer
new_email_vec = vectorizer.transform(new_email)

# Predict using the trained hybrid model
prediction = hybrid_model.predict(new_email_vec)

# Output the result (spam = 1, ham = 0)
if prediction == 1:
    print("\nThe email is spam.")
else:
    print("\nThe email is ham.")
