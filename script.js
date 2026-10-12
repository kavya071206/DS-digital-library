const experimentData = {

    "1A": {
        title: "Experiment 1A",
        items: {
            "1A.1": {
                title: "1A.1 - Load and Inspect Iris Dataset",
                overview: "Load the Iris dataset using Pandas and examine its first rows, structure, and overall dimensions.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd
url="https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df=pd.read_csv(url)
print("First five rows of the dataset:")
print(df.head())
print("\\nDataset Information:")
print(df.info())
print("\\nNumber of rows and columns:")
print(df.shape)`,
                output: `First five rows of the dataset:

   sepal_length  sepal_width  petal_length  petal_width species
0           5.1          3.5           1.4          0.2  setosa
1           4.9          3.0           1.4          0.2  setosa
2           4.7          3.2           1.3          0.2  setosa
3           4.6          3.1           1.5          0.2  setosa
4           5.0          3.6           1.4          0.2  setosa

Dataset Information:
<class 'pandas.core.frame.DataFrame'>

Number of rows and columns:
(150, 5)`
            },

            "1A.2": {
                title: "1A.2 - Write Dataset to CSV",
                overview: "Load the Iris dataset with Pandas and save the complete dataset into a new CSV file.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd
url="https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df=pd.read_csv(url)
df.to_csv("iris_output.csv",index=False)
print("The dataset has been successfully written to iris_output.csv")`,
                output: `The dataset has been successfully written to iris_output.csv`
            },

            "1A.3": {
                title: "1A.3 - Read Tab-Separated Text File",
                overview: "Read student records from a tab-separated text file and display the stored data using Pandas.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

df=pd.read_csv("students.txt",sep="\\t")

print("Student data:")

print(df)`,
                output: `Student data:

Output depends on the contents of students.txt.`
            },

            "1A.4": {
                title: "1A.4 - Write Data to Text File",
                overview: "Create a student DataFrame and store its records in a tab-separated text file using Pandas.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

student_data={
    "Roll_No":[101,102,103,104],
    "Name":["Anusha","Babitha","Charitha","Deepika"],
    "Department":["IT","IT","CSE","ECE"],
    "Percentage":[89,92,88,85]
}

df=pd.DataFrame(student_data)

df.to_csv("student_output.txt",sep="\\t",index=False)

print("Data successfully written to student_output.txt")`,
                output: `Data successfully written to student_output.txt`
            }
        }
    },

    "1B": {
        title: "Experiment 1B",
        items: {
            "1B.1": {
                title: "1B.1 - Write Data to JSON",
                overview: "Create a student DataFrame and export its records into a structured JSON file using Pandas.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

student_data = {
    "Roll-No":[101,102,103,104],
    "Name":["Anusha","Babitha","charitha","deepika"],
    "Department":["IT","IT","CSE","ECE"],
    "Percentage":[89,92,88,85]
}

df = pd.DataFrame(student_data)

df.to_json(
    "students.json", orient="records", indent =4
)

print("JSON file created successfully")`,
                output: `JSON file created successfully`
            },

            "1B.2": {
                title: "1B.2 - Read JSON File",
                overview: "Read student records from a JSON file and display the data as a Pandas DataFrame.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

df = pd.read_json("students.json")

print("students data")

print(df)`,
                output: `students data

   Roll-No      Name Department  Percentage
0      101    Anusha         IT          89
1      102   Babitha         IT          92
2      103  charitha        CSE          88
3      104  deepika        ECE          85`
            },

            "1B.3": {
                title: "1B.3 - Parse JSON String",
                overview: "Parse JSON data stored as a string and convert it into a Pandas DataFrame for structured data analysis.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

from io import StringIO

json_data = """
[
{
"Roll-No": 101,
"Name": "Anusha",
"Percentage": 89
},
{
"Roll-No": 102,
"Name": "Babitha",
"Percentage": 92
},{
"Roll-No": 103,
"Name": "charitha",
"Percentage": 88
}
]
"""

df = pd.read_json(StringIO(json_data))

print("ParsedJSON data")

print(df)`,
                output: `ParsedJSON data

   Roll-No      Name  Percentage
0      101    Anusha          89
1      102   Babitha          92
2      103  charitha          88`
            },

            "1B.4": {
                title: "1B.4 - Read JSON from Online API",
                overview: "Fetch JSON data from an online API and load it directly into a Pandas DataFrame for analysis.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd
url = "https://jsonplaceholder.typicode.com/users"
df = pd.read_json(url)
print(df.head())`,
                output: `First five records from the JSONPlaceholder users API are displayed as a Pandas DataFrame.`
            }
        }
    },

    "1C": {
        title: "Experiment 1C",
        items: {
            "1C.1": {
                title: "1C.1 - Write Data to Excel",
                overview: "Create a student DataFrame and export the records into an Excel worksheet using Pandas.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

student_data = {
    "Roll-No": [101, 102, 103,104],
    "Name": ["Anusha", "Babitha", "charitha", "deepika"],
    "Department": ["IT", "IT", "CSE", "ECE"],
    "Percentage": [89, 92, 88, 85]
}

df = pd.DataFrame(student_data)

df.to_excel("Students.xlsx",sheet_name = "Student Details",index = False)

print("Data successfully written to Students.xlsx")`,
                output: `Data successfully written to Students.xlsx`
            },

            "1C.2": {
                title: "1C.2 - Read Excel Worksheet",
                overview: "Read student records from an Excel worksheet and display the data using a Pandas DataFrame.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

df  = pd.read_excel(
    "Students.xlsx", 
    sheet_name = "Student Details"
)

print("Data read from Students.xlsx")

print(df)`,
                output: `Data read from Students.xlsx

   Roll-No      Name Department  Percentage
0      101    Anusha         IT          89
1      102   Babitha         IT          92
2      103  charitha        CSE          88
3      104  deepika        ECE          85`
            },

            "1C.3": {
                title: "1C.3 - Write Multiple Excel Sheets",
                overview: "Create student and course DataFrames and store them in separate worksheets within a single Excel file.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

Student_data = {
    "Roll-No": [101, 102, 103],
    "Name": ["Anusha", "Babitha", "charitha"],
    "Department": ["IT", "IT", "CSE"],
    "Percentage": [89, 92, 88]
}

course_data = {
    "Course-ID": ["c101","c102","c103"],
    "Instructor": ["Anusha", "Babitha", "charitha"],
    "Department": ["IT", "IT", "CSE"],
    "Credits": [4, 3,4]
}

Students_df = pd.DataFrame(Student_data)
Courses_df = pd.DataFrame(course_data)

with pd.ExcelWriter("College_data.xlsx",engine="openpyxl") as writer:

    Students_df.to_excel(
        writer,
        sheet_name = "Students",
        index = False
    )

    Courses_df.to_excel(
        writer,
        sheet_name = "Courses",
        index = False
    )

    print("Multiple sheets successfully written to College_data.xlsx")`,
                output: `Multiple sheets successfully written to College_data.xlsx`
            },

            "1C.4": {
                title: "1C.4 - Read Multiple Excel Sheets",
                overview: "Read all worksheets from an Excel file and display the available sheets with their stored data.",
                video: "videos/exp1.mp4",
                code: `import pandas as pd

excel_data = pd.read_excel(
    "College_data.xlsx",
    sheet_name = None
)

print("Available sheets:")

print(excel_data.keys())

print("\\nStudent sheet:")

print(excel_data["Students"])

print("\\nCourse sheet:")

print(excel_data["Courses"])`,
                output: `Available sheets:
dict_keys(['Students', 'Courses'])

Student sheet:
   Roll-No      Name Department  Percentage
0      101    Anusha         IT          89
1      102   Babitha         IT          92
2      103  charitha        CSE          88

Course sheet:
  Course-ID Instructor Department  Credits
0      c101     Anusha         IT        4
1      c102    Babitha         IT        3
2      c103   charitha        CSE        4`
            }
        }
    },

    "2A": {
        title: "2A - GitHub API Data",
        overview: "Fetch GitHub repository issue data through an API and analyze selected fields using a Pandas DataFrame.",
        video: "videos/exp2.mp4",
        code: `import requests

import pandas as pd

url = "https://api.github.com/repos/pandas-dev/pandas/issues"

response = requests.get(url)

issues = response.json()

df_issues = pd.DataFrame(issues)

print(df_issues[['id', 'title', 'state', 'created_at']].head())`,
        output: `The first five GitHub issues are displayed with their id, title, state and created_at fields.`
    },
    "2B": {
        title: "2B - SQLite Database Handling",
        overview: "Create, insert, query, update, and delete student records in SQLite using Pandas and Python database connectivity.",
        video: "videos/exp2.mp4",
        code: `import sqlite3

import pandas as pd

conn = sqlite3.connect('students.db')

cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS students
                 (id INTEGER PRIMARY KEY, name TEXT)''')

cursor.execute("INSERT INTO students VALUES(1,'John')")

cursor.execute("INSERT INTO students VALUES(2,'Jane')")

conn.commit()

df=pd.read_sql_query("SELECT * FROM students", conn)

print(df)

cursor.execute("UPDATE students SET name='Alice' WHERE id=1")

cursor.execute("DELETE FROM students WHERE id=1")

conn.commit()

conn.close()`,
        output: `   id  name
0   1  John
1   2  Jane`
    },


    "3A": {
        title: "3A - Handling Missing Values",
        overview: "Identify missing values, remove incomplete records, and replace missing values using Pandas data cleaning techniques.",
        video: "videos/exp3.mp4",
        code: `import pandas as pd

import numpy as np

data={'A':[1,2,np.nan],'B':[4,np.nan,np.nan]}

df=pd.DataFrame(data)

print(df.isna())

df_clean=df.dropna()

df_filled=df.fillna(0)

print(df_clean)

print(df_filled)`,
        output: `       A      B
0  False  False
1  False   True
2   True   True

     A    B
0  1.0  4.0

     A    B
0  1.0  4.0
1  2.0  0.0
2  0.0  0.0`
    },


    "3B": {
        title: "3B - Data Transformation",
        overview: "Transform categorical gender values into numerical labels and rename DataFrame columns using Pandas operations.",
        video: "videos/exp3.mp4",
        code: `import pandas as pd

import numpy as np

df=pd.DataFrame({'gender':['male','female','male']})

df['gender_num']=df['gender'].map({'male':0,'female':1})

df_renamed=df.rename(columns={'gender':'Gender'})

print(df_renamed)`,
        output: `   Gender  gender_num
0    male           0
1  female           1
2    male           0`
    },


    "3C": {
        title: "3C - Detecting Outliers",
        overview: "Generate random numerical data and identify values outside the range of negative three to positive three.",
        video: "videos/exp3.mp4",
        code: `import numpy as np

import pandas as pd

data=pd.DataFrame(np.random.randn(100,3))

outliers=(data>3)|(data<-3)

print(outliers.sum())`,
        output: `The output contains the number of values outside the range -3 to +3 for each column.

The exact values change because np.random.randn() generates random data.`
    },


    "3D": {
        title: "3D - Text Cleaning and Splitting",
        overview: "Split text using regular expressions to identify individual words separated by spaces, tabs, and newline characters.",
        video: "videos/exp3.mp4",
        code: `import re

text="This is\\t a \\n test"

split_text=re.split(r'\\s+',text)

print(split_text)`,
        output: `['This', 'is', 'a', 'test']`
    },


    "4A": {
        title: "4A - Hierarchical Indexing",
        overview: "Create a Pandas Series with multiple index levels and access data using hierarchical indexing techniques.",
        video: "videos/exp4.mp4",
        code: `import pandas as pd

import numpy as np

data=pd.Series(np.random.randn(6),index=[['a','a','b','b','c','c'],[1,2,1,2,1,2]])

print(data)

print(data['b'])

print(data[:,1])`,
        output: `A hierarchical Pandas Series is displayed.

The values are randomly generated, so the numerical values change on each execution.`
    },


    "4B": {
        title: "4B - Stack and Unstack",
        overview: "Convert hierarchical Pandas data between stacked and unstacked formats for flexible tabular data representation.",
        video: "videos/exp4.mp4",
        code: `import pandas as pd

import numpy as np

data=pd.Series(np.random.randn(6),index=[['a','a','b','b','c','c'],[1,2,1,2,1,2]])

df=data.unstack()

print(df)

print(df.stack())`,
        output: `The hierarchical Series is converted into a DataFrame using unstack() and then converted back using stack().`
    },


    "4C": {
        title: "4C - Combining DataFrames",
        overview: "Combine two DataFrames by filling missing values from one dataset with corresponding values from another.",
        video: "videos/exp4.mp4",
        code: `import pandas as pd

import numpy as np

df1=pd.DataFrame({'a':[1,np.nan,3],'b':[4,5,6]})

df2=pd.DataFrame({'a':[7,8,9],'b':[np.nan,11,12]})

merged=df1.combine_first(df2)

print(merged)`,
        output: `     a     b
0  1.0   4.0
1  8.0   5.0
2  3.0  12.0`
    },
        "5A": {
        title: "5A - Monthly Sales and Expenses Analysis",
        overview: "Visualize monthly sales and expenses using annotated Matplotlib line plots arranged together for comparison.",
        video: "videos/exp5.mp4",
        code: `import matplotlib.pyplot as plt

months = ['Jan','Feb','Mar','Apr','May','Jun']

sales = [120,150,180,160,220,250]

expenses = [80,100,120,110,140,160]

fig, ax = plt.subplots(1,2,figsize=(10,5))

ax[0].plot(months,sales,marker='o',linewidth=2,label='Sales')

ax[0].set_title("Monthly Sales")

ax[0].set_xlabel("Month")

ax[0].set_ylabel("Sales")

ax[0].set_xticks(range(len(months)))

ax[0].set_xticklabels(months)

ax[0].annotate("Highest Sales", xy=(5,250), xytext=(3.5,270),
               arrowprops=dict(arrowstyle='->'))

ax[0].legend()

ax[0].grid(True)

ax[1].plot(months,expenses,marker="s",linewidth=2,label="Expenses")

ax[1].set_title("Monthly Expenses")

ax[1].set_xlabel("Month")

ax[1].set_ylabel("Expenses")

ax[1].set_xticks(range(len(months)))

ax[1].set_xticklabels(months)

ax[1].annotate("Highest Expenses",xy=(5,160),xytext=(3.5,180),
               arrowprops=dict(arrowstyle="->"))

ax[1].legend()

ax[1].grid(True)

fig.suptitle("Monthly Sales and Expenses Analysis",fontsize=16)

plt.tight_layout()

plt.savefig("monthly_sales_expenses.png", dpi=300,bbox_inches="tight")

plt.show()`,
        output: `Monthly Sales and Expenses Analysis graph displayed successfully.`,
        graph: "monthly_sales_expenses.png"
    },


    "5B": {
        title: "Experiment 5B",
        items: {

            "5B.1": {
                title: "5B.1 - Student Marks Bar Plot",
                overview: "Compare student marks across Python, Java, and C++ using a grouped bar chart created with Pandas and Matplotlib.",
                video: "videos/exp5.mp4",
                code: `import pandas as pd

import matplotlib.pyplot as plt

data={'Python':[85,90,78,88],'Java':[75,82,80,85],'C++':[80, 76, 85, 90]}

df=pd.DataFrame(data,index=['Student1','Student2','Student3','Student4'])

print("DataFrame:")

print(df)

df.plot(kind='bar',figsize=(8, 5))

plt.title("Student Marks in Different Programming Languages")

plt.xlabel("Students")

plt.ylabel("Marks")

plt.xticks(rotation=0)

plt.legend(title="Subjects")

plt.tight_layout()

plt.show()`,
                output: `DataFrame:

          Python  Java  C++
Student1      85    75   80
Student2      90    82   76
Student3      78    80   85
Student4      88    85   90`,
                graph: "student_marks_bar.png"
            },

            "5B.2": {
                title: "5B.2 - Stacked Bar Plot",
                overview: "Represent student marks using stacked bars to compare combined subject performance across programming languages.",
                video: "videos/exp5.mp4",
                code: `import pandas as pd

import matplotlib.pyplot as plt

data={'Python':[85,90,78,88],'Java':[75,82,80,85],'C++':[80,76,85,90]}

df=pd.DataFrame(data,index=['Student1','Student2','Student3','Student4'])

print("DtaFrame:")

print(df)

df.plot(kind='bar',stacked=True,figsize=(8,5))

plt.title("Stacked Bar Plot of Student Marks")

plt.xlabel("Students")

plt.ylabel("Total Marks")

plt.xticks(rotation=0)

plt.legend(title="Subjects")

plt.tight_layout()

plt.show()`,
                output: `DtaFrame:

          Python  Java  C++
Student1      85    75   80
Student2      90    82   76
Student3      78    80   85
Student4      88    85   90`,
                graph: "student_marks_stacked.png"
            }
        }
    },


    "5C": {
        title: "5C - Histogram and Density Plot",
        overview: "Analyze marks distribution using a histogram and density plot to understand frequency and overall data distribution.",
        video: "videos/exp5.mp4",
        code: `import pandas as pd

import matplotlib.pyplot as plt

import seaborn as sns

data=[45,50,52,55,58,60,62,65,68,70,72,75,78,80,82,85,88,90,92,95]

df=pd.DataFrame(data,columns=['Marks'])

print("Observed data:")

print(df)

plt.figure(figsize=(8,5))

sns.histplot(df['Marks'],bins=6,kde=False)

plt.title("Histogram of Marks")

plt.xlabel("Marks")

plt.ylabel("Frequency")

plt.tight_layout()

plt.savefig("marks_histogram.png",dpi=300,bbox_inches="tight")

plt.show()

plt.figure(figsize=(8,5))

sns.kdeplot(df['Marks'],fill=True)

plt.title("Density Plot of Marks")

plt.xlabel("Marks")

plt.ylabel("Density")

plt.tight_layout()

plt.show()

plt.savefig("marks_density_plot.png",dpi=300,bbox_inches="tight")`,
        output: `Observed data:

Marks distribution is displayed using a histogram and density plot.`,
        graph: "marks_histogram.png"
    },


    "5D": {
        title: "5D - Study Hours and Marks",
        overview: "Examine the relationship between study hours and marks using a scatter plot and calculate their correlation coefficient.",
        video: "videos/exp5.mp4",
        code: `import pandas as pd

import matplotlib.pyplot as plt

study_hours = [1,2,3,4,5,6,7,8,9,10]

marks = [45,50,55,60,65,70,72,80,85,90]

df = pd.DataFrame({
    'Study_Hours': study_hours,
    'Marks': marks
})

print("Data:")

print(df)

plt.figure(figsize=(8, 5))

plt.scatter(df['Study_Hours'], df['Marks'])

plt.title("Relationship Between Study Hours and Marks")

plt.xlabel("Study Hours")

plt.ylabel("Marks")

plt.grid(True)

plt.tight_layout()

plt.show()

correlation = df['Study_Hours'].corr(df['Marks'])

print("\\nCorrelation Coefficient:", round(correlation, 2))

plt.savefig("study_hours_vs_marks_scatterplot.png", dpi=300, bbox_inches="tight")`,
        output: `Data:

   Study_Hours  Marks
0            1     45
1            2     50
2            3     55
3            4     60
4            5     65
5            6     70
6            7     72
7            8     80
8            9     85
9           10     90

Correlation Coefficient: 0.99`,
        graph: "study_hours_vs_marks_scatterplot.png"
    },


    "5E": {
        title: "5E - Marks Distribution by Department",
        overview: "Compare marks distributions across CSE, ECE, and EEE departments using a Seaborn box plot.",
        video: "videos/exp5.mp4",
        code: `import pandas as pd

import matplotlib.pyplot as plt

import seaborn as sns

data = {'Department': ['CSE','CSE','CSE','CSE','CSE','ECE','ECE','ECE','ECE','ECE','EEE', 'EEE', 'EEE', 'EEE', 'EEE'],

    'Marks': [78, 85, 90, 72, 88,65, 70, 82, 75, 80,60, 68, 72, 76, 85]}

df = pd.DataFrame(data)

print("Data:")

print(df)

plt.figure(figsize=(8, 5))

sns.boxplot(x='Department',y='Marks',data=df)

plt.title("Marks Distribution by Department")

plt.xlabel("Department")

plt.ylabel("Marks")

plt.grid(axis='y', linestyle='--', alpha=0.5)

plt.tight_layout()

plt.show()

plt.savefig("marks_distribution_by_department_boxplot.png", dpi=300, bbox_inches="tight")`,
        output: `Data:

Department and marks records are displayed, followed by a box plot comparing marks distribution across CSE, ECE and EEE.`,
        graph: "marks_distribution_by_department_boxplot.png"
    },
        "6A": {
        title: "6A - Create Time Series Using Datetime Objects",
        overview: "Create a Pandas time series using datetime objects as the index and store corresponding numerical values.",
        video: "videos/exp6.mp4",
        code: `import pandas as pd
import numpy as np

rng = pd.date_range('2023-01-01', periods=6, freq='D')
ts = pd.Series(np.random.randn(len(rng)), index=rng)

print("Time Series:")
print(ts)`,
        output: `Time Series:

2023-01-01    -0.456321
2023-01-02     0.782341
2023-01-03    -1.234512
2023-01-04     0.567891
2023-01-05     1.123456
2023-01-06    -0.345678
Freq: D, dtype: float64

Note: Values are randomly generated and will differ each time.`
    },

    "6B": {
        title: "6B - Generate DatetimeIndex Using date_range()",
        overview: "Generate a DatetimeIndex containing a specified number of timestamps using the Pandas date_range() function.",
        video: "videos/exp6.mp4",
        code: `import pandas as pd

date_index = pd.date_range(
    start='2026-01-01',
    periods=7,
    freq='D'
)

print("Generated DatetimeIndex:")
print(date_index)`,
        output: `Generated DatetimeIndex:

DatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-03',
               '2026-01-04', '2026-01-05', '2026-01-06',
               '2026-01-07'],
              dtype='datetime64[ns]', freq='D')`
    },

    "6C": {
        title: "6C - Time Zone Localization and Conversion",
        overview: "Localize timestamps to UTC, convert them to Asia/Kolkata and New York time zones, and combine time-series data.",
        video: "videos/exp6.mp4",
        code: `import pandas as pd

rng = pd.date_range('2023-01-01', periods=6, freq='D')
ts = pd.Series([10, 20, 30, 40, 50, 60], index=rng)

print("Original Time Series:")
print(ts)

ts_utc = ts.tz_localize('UTC')
print("\\nTime Series in UTC:")
print(ts_utc)

ts_ind = ts_utc.tz_convert('Asia/Kolkata')
print("\\nTime Series in Asia/Kolkata:")
print(ts_ind)

ts_newyork = ts_utc.tz_convert('America/New_York')
print("\\nTime Series in New York:")
print(ts_newyork)

combined = pd.concat([ts_ind, ts_newyork])
print("\\nCombined Time Series:")
print(combined)`,
        output: `The program displays the original timestamps, UTC timestamps, converted Asia/Kolkata timestamps, New York timestamps and the combined time series.

For example, 2023-01-01 00:00:00 UTC becomes:
Asia/Kolkata: 2023-01-01 05:30:00+05:30
New York:     2022-12-31 19:00:00-05:00

The combined output contains all 12 observations.`
    },

    "6D": {
        title: "6D - Period Arithmetic and period_range()",
        overview: "Perform arithmetic on quarterly Period objects and generate a range of periods using period_range().",
        video: "videos/exp6.mp4",
        code: `import pandas as pd

p = pd.Period('2024Q1')

print("Original Period:")
print(p)

print("\\nAfter Adding 1:")
print(p + 1)

print("\\nAfter Subtracting 1:")
print(p - 1)

print("\\nPeriod converted to monthly frequency:")
print(p.asfreq('M', 'end'))

periods = pd.period_range('2024Q1', periods=4, freq='Q')
print("\\nRange of Periods:")
print(periods)`,
        output: `Original Period:
2024Q1

After Adding 1:
2024Q2

After Subtracting 1:
2023Q4

Period converted to monthly frequency:
2024-03

Range of Periods:
PeriodIndex(['2024Q1', '2024Q2', '2024Q3', '2024Q4'], dtype='period[Q-DEC]')`
    },

    "6E": {
        title: "6E - Convert Periods Using asfreq()",
        overview: "Convert Period and PeriodIndex objects from monthly frequency to daily frequency using the asfreq() method.",
        video: "videos/exp6.mp4",
        code: `import pandas as pd

p = pd.Period('2026-01', freq='M')
print("Original Period:")
print(p)

daily_start = p.asfreq('D', how='start')
print("\\nMonthly Period converted to Daily (Start):")
print(daily_start)

daily_end = p.asfreq('D', how='end')
print("\\nMonthly Period converted to Daily (End):")
print(daily_end)

period_index = pd.period_range('2026-01', periods=3, freq='M')
print("\\nOriginal PeriodIndex:")
print(period_index)

daily_period_index = period_index.asfreq('D', how='start')
print("\\nPeriodIndex converted to Daily Frequency:")
print(daily_period_index)

daily_period_index_end = period_index.asfreq('D', how='end')
print("\\nPeriodIndex converted to Daily Frequency (End):")
print(daily_period_index_end)`,
        output: `Original Period:
2026-01

Monthly Period converted to Daily (Start):
2026-01-01

Monthly Period converted to Daily (End):
2026-01-31

Original PeriodIndex:
PeriodIndex(['2026-01', '2026-02', '2026-03'], dtype='period[M]')

PeriodIndex converted to Daily Frequency:
PeriodIndex(['2026-01-01', '2026-02-01', '2026-03-01'], dtype='period[D]')

PeriodIndex converted to Daily Frequency (End):
PeriodIndex(['2026-01-31', '2026-02-28', '2026-03-31'], dtype='period[D]')`
    },

    "6F": {
        title: "6F - Convert Series and DataFrame to Periods",
        overview: "Convert Series and DataFrame objects indexed by timestamps into monthly PeriodIndex objects using to_period().",
        video: "videos/exp6.mp4",
        code: `import pandas as pd

dates = pd.to_datetime([
    '2026-01-10',
    '2026-02-15',
    '2026-03-20',
    '2026-04-25'
])

sales = pd.Series([1000, 1500, 1800, 2200], index=dates)
print("Original Series:")
print(sales)

period_series = sales.to_period('M')
print("\\nSeries converted to Monthly Periods:")
print(period_series)

df = pd.DataFrame(
    {'Sales': [1000, 1500, 1800, 2200],
     'Profit': [200, 300, 400, 500]},
    index=dates
)

print("\\nOriginal DataFrame:")
print(df)

period_df = df.to_period('M')
print("\\nDataFrame converted to Monthly Periods:")
print(period_df)`,
        output: `Original Series:
2026-01-10    1000
2026-02-15    1500
2026-03-20    1800
2026-04-25    2200
dtype: int64

Series converted to Monthly Periods:
2026-01    1000
2026-02    1500
2026-03    1800
2026-04    2200
Freq: M, dtype: int64

The DataFrame is displayed first with timestamp indexes and then with monthly period indexes.`
    },

    "6G": {
        title: "6G - Resampling, Downsampling and Upsampling",
        overview: "Resample daily time-series data into monthly and weekly intervals, then upsample it to hourly frequency.",
        video: "videos/exp6.mp4",
        code: `import pandas as pd
import numpy as np

np.random.seed(10)

ts = pd.Series(
    np.random.randn(100),
    index=pd.date_range('2024-01-01', periods=100, freq='D')
)

print("Original Time Series:")
print(ts)

ts_monthly = ts.resample('ME').mean()
print("\\nMonthly Resampled Time Series:")
print(ts_monthly)

ts_weekly = ts.resample('W').sum()
print("\\nWeekly Downsampled Time Series:")
print(ts_weekly)

ts_hourly = ts.resample('h').asfreq()
print("\\nHourly Upsampled Time Series:")
print(ts_hourly.head(15))

ts_ffill = ts.resample('h').ffill()
print("\\nHourly Upsampled Time Series Using Forward Fill:")
print(ts_ffill.head(15))`,
        output: `The program displays:

1. Original daily time series containing 100 observations.
2. Monthly mean values after resampling.
3. Weekly sum values after downsampling.
4. Hourly values with NaN at newly created timestamps after upsampling with asfreq().
5. Hourly values filled from the previous observation after using ffill().

Note: Random values are generated with a fixed seed, so the output is reproducible.`
    }

};
function openGroup(group) {

    const modal = document.getElementById("groupModal");
    const title = document.getElementById("groupTitle");
    const items = document.getElementById("groupItems");

    title.textContent = experimentData[group].title;

    items.innerHTML = "";

    Object.keys(experimentData[group].items).forEach(key => {

        const button = document.createElement("button");

        button.className = "group-item";

        button.textContent = experimentData[group].items[key].title;

        button.onclick = function() {
            closeGroup();
            openExperiment(key, group);
        };

        items.appendChild(button);

    });

    modal.style.display = "block";
}


function openExperiment(key, group) {

    let item;

    if (group) {
        item = experimentData[group].items[key];
    } else {
        item = experimentData[key];
    }

    if (!item) {
        alert("Experiment data not found.");
        return;
    }

    document.getElementById("detailTitle").textContent = item.title;

    document.getElementById("detailOverview").textContent = item.overview;

    document.getElementById("detailCode").textContent = item.code;

    document.getElementById("detailOutput").textContent = item.output;

    const video = document.getElementById("detailVideo");

    const source = document.getElementById("videoSource");

    source.src = item.video;

    video.load();

    const graphSection = document.getElementById("graphSection");

    const graphContainer = document.getElementById("graphContainer");

    graphContainer.innerHTML = "";

    if (item.graph) {

        graphSection.style.display = "block";

        const image = document.createElement("img");

        image.src = "images/" + item.graph;

        image.alt = "Experiment graph";

        graphContainer.appendChild(image);

    } else {

        graphSection.style.display = "none";

    }

    document.getElementById("detailModal").style.display = "block";
}


function openExperimentDirect(key) {

    if (experimentData[key] && experimentData[key].items) {

        openGroup(key);

    } else if (experimentData[key]) {

        openExperiment(key);

    }

}


function closeGroup() {

    document.getElementById("groupModal").style.display = "none";

}


function closeDetail() {

    const modal = document.getElementById("detailModal");

    modal.style.display = "none";

    const video = document.getElementById("detailVideo");

    video.pause();

}


function copyCode() {

    const code = document.getElementById("detailCode").textContent;

    navigator.clipboard.writeText(code);

    alert("Code copied successfully!");

}


function searchExperiments() {

    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".experiment-card");

    cards.forEach(card => {

        const text = card.dataset.search.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

}


function openAddModal() {

    document.getElementById("addModal").style.display = "block";

}


function closeAddModal() {

    document.getElementById("addModal").style.display = "none";

}


function addExperiment() {

    const name =
        document.getElementById("newExperimentName").value.trim();

    const description =
        document.getElementById("newExperimentDescription").value.trim();

    if (name === "") {

        alert("Please enter an experiment name.");

        return;

    }

    const grid =
        document.getElementById("experimentGrid");

    const card =
        document.createElement("div");

    card.className = "experiment-card";

    card.dataset.search =
        name.toLowerCase();

    card.innerHTML = `

        <div class="experiment-image">

            <img
                src="images/exp1.jpg"
                alt="Data Science Experiment"
            >

        </div>

        <div class="experiment-content">

            <span class="experiment-number">
                NEW EXPERIMENT
            </span>

            <h3>${name}</h3>

            <p>
                ${description}
            </p>

        </div>

    `;

    grid.appendChild(card);

    document.getElementById("newExperimentName").value = "";

    document.getElementById("newExperimentDescription").value = "";

    closeAddModal();

}


window.onclick = function(event) {

    const groupModal =
        document.getElementById("groupModal");

    const detailModal =
        document.getElementById("detailModal");

    const addModal =
        document.getElementById("addModal");

    if (event.target === groupModal) {

        closeGroup();

    }

    if (event.target === detailModal) {

        closeDetail();

    }

    if (event.target === addModal) {

        closeAddModal();

    }

};
/* ============================================================
   ADDITIONS: experiment overview navigation + user modules
   ============================================================ */

const experimentOverviewData = {
    "1": {
        title: "Experiment 1 - Pandas I/O Operations",
        overview: "Learn to read, write and manage structured datasets using Pandas with CSV, TXT, JSON and Excel files.",
        groups: ["1A", "1B", "1C"]
    },
    "2": {
        title: "Experiment 2 - Data Acquisition and Database Handling",
        overview: "Work with data acquired from APIs and manage structured records using Python, Pandas and SQLite databases.",
        groups: ["2A", "2B"]
    },
    "3": {
        title: "Experiment 3 - Data Cleaning and Preprocessing",
        overview: "Clean and prepare datasets by handling missing values, transforming data, detecting outliers and processing text.",
        groups: ["3A", "3B", "3C", "3D"]
    },
    "4": {
        title: "Experiment 4 - Hierarchical Indexing and Data Combination",
        overview: "Explore hierarchical indexing and Pandas operations for stacking, unstacking and combining DataFrames.",
        groups: ["4A", "4B", "4C"]
    },
    "5": {
        title: "Experiment 5 - Data Visualization",
        overview: "Create and analyze informative visualizations using Pandas, Matplotlib and Seaborn to understand datasets.",
        groups: ["5A", "5B", "5C", "5D", "5E"]
    },
    "6": {
        title: "Experiment 6 - Time Series Analysis",
        overview: "Create and analyze time series using timestamps, time zones, periods, frequency conversion and resampling techniques in Pandas.",
        groups: ["6A", "6B", "6C", "6D", "6E", "6F", "6G"]
    }
};

function setActiveNav(activeId) {
    ["homeNav", "experimentsNav", "modulesNav", "projectsNav"].forEach(id => {
        const button = document.getElementById(id);

        if (button) {
            button.classList.toggle("active", id === activeId);
        }
    });
}

function hideMainPanels() {
    const ids = [
        "experimentGrid",
        "modulesPanel",
        "projectsPanel"
    ];

    ids.forEach(id => {
        const panel = document.getElementById(id);

        if (panel) {
            panel.style.display = "none";
        }
    });

    const tools = document.querySelector(".tools");

    if (tools) {
        tools.style.display = "none";
    }
}

function showHome() {
    hideMainPanels();

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.style.display = "block";
    }

    setActiveNav("homeNav");
}

function showExperiments() {
    hideMainPanels();

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.style.display = "none";
    }

    const experimentGrid = document.getElementById("experimentGrid");

    if (experimentGrid) {
        experimentGrid.style.display = "grid";
    }

    const tools = document.querySelector(".tools");

    if (tools) {
        tools.style.display = "flex";
    }

    setActiveNav("experimentsNav");
}

function showModules() {
    hideMainPanels();

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.style.display = "none";
    }

    const modules = document.getElementById("modulesPanel");

    if (modules) {
        modules.style.display = "block";
    }

    setActiveNav("modulesNav");

    renderModules();
}

function showProjects() {
    hideMainPanels();

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.style.display = "none";
    }

    const projects = document.getElementById("projectsPanel");

    if (projects) {
        projects.style.display = "block";
    }

    setActiveNav("projectsNav");
}

function openExperimentOverview(experimentNumber) {
    const data = experimentOverviewData[String(experimentNumber)];

    if (!data) {
        return;
    }

    const titleEl =
        document.getElementById("experimentOverviewTitle");

    const textEl =
        document.getElementById("experimentOverviewText");

    const container =
        document.getElementById("experimentOverviewItems");

    titleEl.textContent =
        data.title || "Experiment " + experimentNumber;

    textEl.textContent =
        data.overview || data.description || "";

    container.innerHTML = "";

    (data.groups || []).forEach(groupKey => {
        const source = experimentData[groupKey];

        if (!source) {
            return;
        }

        const isGroup = !!source.items;

        const programs = isGroup
            ? Object.keys(source.items).map(key => ({
                key,
                item: source.items[key]
            }))
            : [{
                key: groupKey,
                item: source
            }];

        const card = document.createElement("div");

        card.className = "overview-item-card";

        const description = isGroup
            ? `This section contains ${programs.length} programs.`
            : (source.overview || "");

        card.innerHTML = `
            <div class="overview-item-top">
                <span class="overview-item-code">
                    ${escapeHtml(groupKey)}
                </span>

                <span class="overview-program-count">
                    ${programs.length}
                    PROGRAM${programs.length === 1 ? "" : "S"}
                </span>
            </div>

            <h3>${escapeHtml(source.title || groupKey)}</h3>

            <p>${escapeHtml(description)}</p>

            <div class="overview-programs"></div>
        `;

        const programBox =
            card.querySelector(".overview-programs");

        programs.forEach(({ key, item }) => {
            const button = document.createElement("button");

            button.className = "overview-program-btn";

            button.textContent = isGroup
                ? (item.title || key)
                : "Open Program →";

            button.onclick = function() {
                closeExperimentOverview();

                if (isGroup) {
                    openExperiment(key, groupKey);
                } else {
                    openExperiment(key);
                }
            };

            programBox.appendChild(button);
        });

        container.appendChild(card);
    });

    document.getElementById(
        "experimentOverviewModal"
    ).style.display = "block";
}

function closeExperimentOverview() {
    document.getElementById(
        "experimentOverviewModal"
    ).style.display = "none";
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function openAddModuleModal() {
    document.getElementById(
        "addModuleModal"
    ).style.display = "block";
}

function closeAddModuleModal() {
    document.getElementById(
        "addModuleModal"
    ).style.display = "none";
}

function getSavedModules() {
    try {
        return JSON.parse(
            localStorage.getItem("dsDigitalLibraryModules") || "[]"
        );
    } catch (e) {
        return [];
    }
}

function saveModules(modules) {
    localStorage.setItem(
        "dsDigitalLibraryModules",
        JSON.stringify(modules)
    );
}

function addModule() {
    const name = document
        .getElementById("newModuleName")
        .value.trim();

    const description = document
        .getElementById("newModuleDescription")
        .value.trim();

    if (!name) {
        alert("Please enter a module name.");
        return;
    }

    const modules = getSavedModules();

    modules.push({
        name,
        description
    });

    saveModules(modules);

    document.getElementById("newModuleName").value = "";

    document.getElementById(
        "newModuleDescription"
    ).value = "";

    closeAddModuleModal();

    renderModules();
}

function deleteModule(index) {
    const modules = getSavedModules();

    modules.splice(index, 1);

    saveModules(modules);

    renderModules();
}

function renderModules() {
    const grid = document.getElementById("modulesGrid");

    if (!grid) {
        return;
    }

    const modules = getSavedModules();

    grid.innerHTML = "";

    if (modules.length === 0) {
        grid.innerHTML = `
            <div class="empty-modules" id="emptyModules">
                <div class="empty-icon">▦</div>

                <h3>No modules added yet</h3>

                <p>
                    Click <strong>+ Add Module</strong>
                    to add your own modules.
                </p>
            </div>
        `;

        return;
    }

    modules.forEach((module, index) => {
        const card = document.createElement("div");

        card.className = "module-card";

        card.innerHTML = `
            <div class="module-icon">▦</div>

            <div class="module-content">
                <span class="small-title">
                    MODULE ${String(index + 1).padStart(2, "0")}
                </span>

                <h3>${escapeHtml(module.name)}</h3>

                <p>
                    ${escapeHtml(
                        module.description || "No overview added."
                    )}
                </p>
            </div>

            <button
                class="module-delete"
                onclick="deleteModule(${index})"
                title="Delete module"
            >×</button>
        `;

        grid.appendChild(card);
    });
}

// Extend the existing outside-click behavior without
// changing its original actions.

const originalWindowClick = window.onclick;

window.onclick = function(event) {
    if (typeof originalWindowClick === "function") {
        originalWindowClick(event);
    }

    const overviewModal =
        document.getElementById("experimentOverviewModal");

    const addModuleModal =
        document.getElementById("addModuleModal");

    if (event.target === overviewModal) {
        closeExperimentOverview();
    }

    if (event.target === addModuleModal) {
        closeAddModuleModal();
    }
};

// Initial state: show the Home page.

showHome();

function openGithubLink() {
    const input =
        document.getElementById("detailGithubLink");

    const value = input ? input.value.trim() : "";

    if (!value) {
        alert("Please enter a GitHub repository link.");
        return;
    }

    try {
        const url = new URL(value);

        if (
            url.protocol !== "http:" &&
            url.protocol !== "https:"
        ) {
            throw new Error("Invalid protocol");
        }

        window.open(
            url.href,
            "_blank",
            "noopener,noreferrer"
        );

    } catch (e) {
        alert("Please enter a valid GitHub link.");
    }
}

/* ===== PROJECTS FUNCTIONALITY ===== */

function openAddProjectModal() {
    const modal = document.getElementById("addProjectModal");

    if (modal) {
        modal.style.display = "flex";
        document.getElementById("newProjectName")?.focus();
    } else {
        alert("Add Project modal was not found in index.html.");
    }
}

function closeAddProjectModal() {
    const modal = document.getElementById("addProjectModal");

    if (modal) {
        modal.style.display = "none";
    }
}

function getSavedProjects() {
    try {
        return JSON.parse(localStorage.getItem("dsLibraryProjects")) || [];
    } catch (error) {
        return [];
    }
}

function addProject() {
    const nameInput = document.getElementById("newProjectName");
    const descriptionInput = document.getElementById("newProjectDescription");
    const githubInput = document.getElementById("newProjectGithub");

    if (!nameInput || !descriptionInput || !githubInput) {
        alert("Project form fields are missing. Please check index.html.");
        return;
    }

    const name = nameInput.value.trim();
    const description = descriptionInput.value.trim();
    const github = githubInput.value.trim();

    if (!name) {
        alert("Please enter a project name.");
        nameInput.focus();
        return;
    }

    if (github) {
        try {
            const parsedUrl = new URL(github);

            if (
                parsedUrl.protocol !== "https:" &&
                parsedUrl.protocol !== "http:"
            ) {
                throw new Error("Invalid URL");
            }
        } catch (error) {
            alert("Please enter a valid GitHub URL.");
            githubInput.focus();
            return;
        }
    }

    const projects = getSavedProjects();

    projects.push({
        id: Date.now(),
        name: name,
        description: description,
        github: github
    });

    localStorage.setItem("dsLibraryProjects", JSON.stringify(projects));

    renderProjects();
    nameInput.value = "";
    descriptionInput.value = "";
    githubInput.value = "";

    closeAddProjectModal();
}

function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    const emptyState = document.getElementById("projectsEmpty");

    if (!grid || !emptyState) {
        return;
    }

    const projects = getSavedProjects();

    grid.innerHTML = "";

    emptyState.style.display = projects.length === 0 ? "block" : "none";

    projects.forEach(function (project) {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.name;
        card.appendChild(title);

        const description = document.createElement("p");
        description.textContent = project.description || "No description provided.";
        card.appendChild(description);

        if (project.github) {
            const link = document.createElement("a");
            link.className = "project-github";
            link.href = project.github;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View GitHub Repository ↗";
            card.appendChild(link);
        }

        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderProjects);
