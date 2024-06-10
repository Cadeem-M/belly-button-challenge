# belly-button-challenge



## Introduction
Belly Button Challenge App: https://cadeem-m.github.io/belly-button-challenge/

Through this week's challenge, I aim to provide an interactive app that can be used to visualize data recorded on the microbes that colonize human navels by selecting the subject id of the sample you wish to view.

## How to use App
Upon visiting the website, you would find the page loaded with Subject number 940 as a demonstration.

<p align="center">
<img src="Resources\Screenshot 2024-06-10 092240.png" width="900px">
</p>

On the left side of the page is a Subject id panel that can be used to select and generate visualizations on the selected sample.

<p align="center">
<img src="Resources\Screenshot 2024-06-10 092311.png" width="300px">
</p>

Once the sample whom users want to view is selected, 3 updates should happen. Firstly, the demographic info panel underneath the subject id panel will be updated to reflect the personal information of the selected subject.

<p align="center">
<img src="Resources\Screenshot 2024-06-10 142247.png" width="300px">
</p>

Secondly, the bar chart at center page will be updated to reflect the top 10 bacterias found in that subject.

<p align="center">
<img src="Resources\Screenshot 2024-06-10 142238.png" width="500px">
</p>

Finally, a bubble chart will be generated at the bottom of the page to further visualize the distributions of microbes. The mouse can be use to hover over the bubble points to get the name of the microbes it represents.

<p align="center">
<img src="Resources\Screenshot 2024-06-10 092333.png" width="500px">
</p>


## How the app works
This app uses D3 library and plotly to generate its visuals in a web browser.


## In closing
Perhaps in the future, I may extend this app's features to include the option of selecting two sample IDs and generating a stacked bar chart to help visualize the comparisons between two subjects. Check back by June 24th, 2024 to see if I follow through.


