<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0" xmlns:sld="http://www.opengis.net/sld">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>8_Romania_pm2p5_concentration_map_2020</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry label="2.0000" color="#d7191c" quantity="2"/>
              <sld:ColorMapEntry label="2.2600" color="#eb6640" quantity="2.2599999999999998"/>
              <sld:ColorMapEntry label="2.5200" color="#fdb165" quantity="2.52"/>
              <sld:ColorMapEntry label="2.7800" color="#fedb96" quantity="2.7800000000000002"/>
              <sld:ColorMapEntry label="3.0400" color="#f8fcbd" quantity="3.04"/>
              <sld:ColorMapEntry label="3.3000" color="#cdebaf" quantity="3.2999999999999998"/>
              <sld:ColorMapEntry label="3.5600" color="#9cd2a7" quantity="3.5600000000000001"/>
              <sld:ColorMapEntry label="3.8000" color="#5ea7b1" quantity="3.7999999999999998"/>
              <sld:ColorMapEntry label="4.0000" color="#2b83ba" quantity="4"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
