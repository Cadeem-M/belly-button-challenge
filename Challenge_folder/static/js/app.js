// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
   

    // get the metadata field
    let metData = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let filtData = metData.filter(item=> item.id == sample);

    // Use d3 to select the panel with id of `#sample-metadata`
    let demoInfoPanel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    demoInfoPanel.html('');

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (let k in filtData[0]){
    demoInfoPanel.append('p').text(`${k}: ${filtData.k}`);

    }
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samps = data.samples;

    // Filter the samples for the object with the desired sample number
    let filtSamps = samps.filter(item => item.id == sample)

    // Get the otu_ids, otu_labels, and sample_values
    let otuId = filtSamps[0].otu_ids;
    let otuLabels = filtSamps[0].otu_labels
    let sampVal = filtSamps[0].sample_values

    // Build a Bubble Chart
    let trace = {
      values: sampVal,
      labels: otuLabels,
      type: "scatter",
      size: otuId,
    };

    let plotData = [trace];

    // Render the Bubble Chart
    Plotly.newPlot("bubble", data, layout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
   let nameField = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let selectData = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let names of nameField){
      selectData.append('p').text(`${names}`)
    };

    // Get the first sample from the list
    let firstSamp = nameField[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSamp);
    buildCharts(firstSamp);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
let dropDownMenu = d3.select('#selDataset');
let selectedSamp = dropDownMenu.property("value");
buildMetadata(selectedSamp);
buildCharts(selectedSamp);
}

// Initialize the dashboard
init();
