// Demo 1
var options = {
  chart: {
    height: 380,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ["#40BAC2", "#2F9097"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  series: [41],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Received'],

}

var chart = new ApexCharts(
  document.querySelector("#apex_radialbar1"),
  options
);

chart.render();

// Demo 2
var options = {
  chart: {
    height: 380,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ["#00A2FD", "#00639B"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  series: [75],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Pending'],

}

var chart = new ApexCharts(
  document.querySelector("#apex_radialbar2"),
  options
);

chart.render();

// Demo 3
var options = {
  chart: {
    height: 380,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ["#AF67B0", "#804E81"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  series: [64],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Awaiting'],

}

var chart = new ApexCharts(
  document.querySelector("#apex_radialbar3"),
  options
);

chart.render();

// Demo 4
var options = {
  chart: {
    height: 380,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ["#F37070", "#F37070"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  series: [85],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Errors'],

}

var chart = new ApexCharts(
  document.querySelector("#apex_radialbar4"),
  options
);

chart.render();


//   Sales Chart
var options = {
  chart: {
    height: 380,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      endingShape: 'rounded',
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  colors: ["#4facfe"],
  series: [{
    name: 'Inflation',
    data: [23, 31, 40, 101, 40, 36, 32, 23, 34, 68, 55, 22]
  }],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    position: 'bottom',
    labels: {
      offsetY: 0,

    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
      offsetY: -35,
    }
  },
  fill: {
    gradient: {
      enabled: false,
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    },
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val;
      }
    }

  },
  grid: {
    row: {
      colors: ['#f1f3fa', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.2
    },
    borderColor: '#f1f3fa'
  }
}

var chart = new ApexCharts(
  document.querySelector("#apex_sales"),
  options
);

chart.render();

// Overview Chart
var options = {
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '18px',
        },
        value: {
          fontSize: '15px',
          formatter: function (val) {
            return parseInt(val);
          }
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            return 249
          }
        }
      }
    }
  },
  series: [44, 55, 67, 83],
  labels: ['Industry', 'State Registar', 'Labor', 'Tourism'],

}

var chart = new ApexCharts(
  document.querySelector("#apex_overview"),
  options
);

chart.render();



// My Finances Page Chart
// Total Earning
var options = {

  chart: {
    height: 80,
    animations: {
      enabled: false
    },
    sparkline: {
      enabled: true
    },
    type: "bar"
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "40%"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  colors: ["#1ecab8"],
  series: [{
    name: "Revenue",
    data: [50, 60, 70, 80, 90, 100, 95, 85, 75, 65, 55, 65, 75, 85, 95, 105, 80, 70, 60, 50, 40, 30, 45, 55, 65, 75, 85, 95, 100, 80, 60]
  }],
  xaxis: {
    categories: ['1-Jan', '2-Jan', '3-Jan', '4-Jan', '5-Jan', '6-Jan', '7-Jan', '8-Jan', '9-Jan', '10-Jan', '11-Jan', '12-Jan', '13-Jan', '14-Jan', '15-Jan', '16-Jan', '17-Jan', '18-Jan', '19-Jan', '20-Jan', '21-Jan', '22-Jan', '23-Jan', '24-Jan', '25-Jan', '26-Jan', '27-Jan', '28-Jan', '29-Jan', '30-Jan', '31-Jan'],
    crosshairs: {
      show: false,
    },
  },
  fill: {
    opacity: 0.5
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return "₹ " + val + " thousands"
      },
    },
  }

}
var chart = new ApexCharts(
  document.querySelector("#totalEarning"),
  options
);

chart.render();

// Pending Budget
var options = {

  chart: {
    height: 80,
    animations: {
      enabled: false
    },
    sparkline: {
      enabled: true
    },
    type: "bar"
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "40%"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  colors: ["#1ecab8"],
  series: [{
    name: "Revenue",
    data: [50, 60, 70, 80, 90, 100, 95, 85, 75, 65, 55, 65, 75, 85, 95, 105, 80, 70, 60, 50, 40, 30, 45, 55, 65, 75, 85, 95, 100, 80, 60]
  }],
  xaxis: {
    categories: ['1-Jan', '2-Jan', '3-Jan', '4-Jan', '5-Jan', '6-Jan', '7-Jan', '8-Jan', '9-Jan', '10-Jan', '11-Jan', '12-Jan', '13-Jan', '14-Jan', '15-Jan', '16-Jan', '17-Jan', '18-Jan', '19-Jan', '20-Jan', '21-Jan', '22-Jan', '23-Jan', '24-Jan', '25-Jan', '26-Jan', '27-Jan', '28-Jan', '29-Jan', '30-Jan', '31-Jan'],
    crosshairs: {
      show: false,
    },
  },
  fill: {
    opacity: 0.5
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return "₹ " + val + " thousands"
      },
    },
  }

}
var chart = new ApexCharts(
  document.querySelector("#pendingBudget"),
  options
);

chart.render();

//   Lead Overview Profile Page 
var options = {
  chart: {
    height: 380,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      endingShape: 'rounded',
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  colors: ["#4facfe"],
  series: [{
    name: 'Inflation',
    data: [23, 31, 40, 101, 40, 36, 32, 23, 34, 68, 55, 22]
  }],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    position: 'bottom',
    labels: {
      offsetY: 0,

    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
      offsetY: -35,
    }
  },
  fill: {
    gradient: {
      enabled: false,
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    },
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val;
      }
    }

  },
  grid: {
    row: {
      colors: ['#f1f3fa', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.2
    },
    borderColor: '#f1f3fa'
  }
}

var chart = new ApexCharts(
  document.querySelector("#apex_lead"),
  options
);

chart.render();