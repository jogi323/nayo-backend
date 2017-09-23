webpackJsonp([0,7],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(935));
__export(__webpack_require__(933));
__export(__webpack_require__(907));
__export(__webpack_require__(934));
__export(__webpack_require__(906));
var file_upload_module_1 = __webpack_require__(999);
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_imageCropperModule__ = __webpack_require__(1004);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_imageCropperModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_imageCropperComponent__ = __webpack_require__(938);
/* unused harmony reexport ImageCropperComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_imageCropper__ = __webpack_require__(937);
/* unused harmony reexport ImageCropper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cropperSettings__ = __webpack_require__(908);
/* unused harmony reexport CropperSettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cropperDrawSettings__ = __webpack_require__(936);
/* unused harmony reexport CropperDrawSettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_model_bounds__ = __webpack_require__(909);
/* unused harmony reexport Bounds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_model_cropPosition__ = __webpack_require__(939);
/* unused harmony reexport CropPosition */
// core


// extra classes



// models


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Fraction */
/* unused harmony export Debug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exif; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fraction = (function (_super) {
    __extends(Fraction, _super);
    function Fraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fraction;
}(Number));

// Console debug wrapper that makes code looks a little bit cleaner
var Debug = (function () {
    function Debug() {
    }
    Debug.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Exif.debug) {
            console.log(args);
        }
    };
    return Debug;
}());

var Exif = (function () {
    function Exif() {
    }
    Exif.addEvent = function (element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
        else {
            // Hello, IE!
            if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            }
        }
    };
    Exif.imageHasData = function (img) {
        return !!(img.exifdata);
    };
    Exif.base64ToArrayBuffer = function (base64) {
        base64 = base64.replace(/^data:([^;]+);base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    };
    Exif.objectURLToBlob = function (url, callback) {
        var http = new XMLHttpRequest();
        http.open('GET', url, true);
        http.responseType = 'blob';
        http.onload = function () {
            if (http.status === 200 || http.status === 0) {
                callback(http.response);
            }
        };
        http.send();
    };
    Exif.getImageData = function (img, callback) {
        function handleBinaryFile(binFile) {
            var data = Exif.findEXIFinJPEG(binFile);
            var iptcdata = Exif.findIPTCinJPEG(binFile);
            img.exifdata = data || {};
            img.iptcdata = iptcdata || {};
            if (callback) {
                callback.call(img);
            }
        }
        if ('src' in img && img.src) {
            if (/^data:/i.test(img.src)) {
                var arrayBuffer = Exif.base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);
            }
            else {
                if (/^blob:/i.test(img.src)) {
                    var fileReader_1 = new FileReader();
                    fileReader_1.onload = function (e) {
                        handleBinaryFile(e.target.result);
                    };
                    Exif.objectURLToBlob(img.src, function (blob) {
                        fileReader_1.readAsArrayBuffer(blob);
                    });
                }
                else {
                    var http_1 = new XMLHttpRequest();
                    http_1.onload = function () {
                        if (http_1.status === 200 || http_1.status === 0) {
                            handleBinaryFile(http_1.response);
                        }
                        else {
                            throw 'Could not load image';
                        }
                    };
                    http_1.open('GET', img.src, true);
                    http_1.responseType = 'arraybuffer';
                    http_1.send(null);
                }
            }
        }
        else {
            if (FileReader && (img instanceof Blob || img instanceof File)) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    Debug.log('Got file of length ' + e.target.result.byteLength);
                    handleBinaryFile(e.target.result);
                };
                fileReader.readAsArrayBuffer(img);
            }
        }
    };
    Exif.findEXIFinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var marker;
        while (offset < length) {
            if (dataView.getUint8(offset) !== 0xFF) {
                Debug.log('Not a valid marker at offset ' + offset + ', found: ' + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }
            marker = dataView.getUint8(offset + 1);
            Debug.log(marker);
            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data
            if (marker === 225) {
                Debug.log('Found 0xFFE1 marker');
                return Exif.readEXIFData(dataView, offset + 4); // , dataView.getUint16(offset + 2) - 2);
                // offset += 2 + file.getShortAt(offset+2, true);
            }
            else {
                offset += 2 + dataView.getUint16(offset + 2);
            }
        }
    };
    Exif.findIPTCinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var isFieldSegmentStart = function (_dataView, _offset) {
            return (_dataView.getUint8(_offset) === 0x38 && _dataView.getUint8(_offset + 1) === 0x42 && _dataView.getUint8(_offset + 2) === 0x49 && _dataView.getUint8(_offset + 3) === 0x4D && _dataView.getUint8(_offset + 4) === 0x04 && _dataView.getUint8(_offset + 5) === 0x04);
        };
        while (offset < length) {
            if (isFieldSegmentStart(dataView, offset)) {
                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) {
                    nameHeaderLength += 1;
                }
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }
                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
                return Exif.readIPTCData(file, startOffset, sectionLength);
            }
            // Not the marker, continue searching
            offset++;
        }
    };
    Exif.readIPTCData = function (file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in Exif.IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = Exif.IptcFieldMap[segmentType];
                    fieldValue = Exif.getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }
            }
            segmentStartPos++;
        }
        return data;
    };
    Exif.readTags = function (file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd);
        var tags = {};
        var entryOffset;
        var tag;
        for (var i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag) {
                Debug.log('Unknown tag: ' + file.getUint16(entryOffset, !bigEnd));
            }
            tags[tag] = Exif.readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    };
    Exif.readTagValue = function (file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd);
        var numValues = file.getUint32(entryOffset + 4, !bigEnd);
        var valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
        var offset;
        var vals, val, n;
        var numerator;
        var denominator;
        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7:
                if (numValues === 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }
            case 2:
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return Exif.getStringFromDB(file, offset, numValues - 1);
            case 3:
                if (numValues === 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }
            case 4:
                if (numValues === 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 5:
                if (numValues === 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Fraction(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Fraction(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }
            case 9:
                if (numValues === 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 10:
                if (numValues === 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
            default:
                break;
        }
    };
    Exif.getStringFromDB = function (buffer, start, length) {
        var outstr = '';
        for (var n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    };
    Exif.readEXIFData = function (file, start) {
        if (Exif.getStringFromDB(file, start, 4) !== 'Exif') {
            Debug.log('Not valid EXIF data! ' + Exif.getStringFromDB(file, start, 4));
            return false;
        }
        var bigEnd, tags, tag, exifData, gpsData, tiffOffset = start + 6;
        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) === 0x4949) {
            bigEnd = false;
        }
        else {
            if (file.getUint16(tiffOffset) === 0x4D4D) {
                bigEnd = true;
            }
            else {
                Debug.log('Not valid TIFF data! (no 0x4949 or 0x4D4D)');
                return false;
            }
        }
        if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
            Debug.log('Not valid TIFF data! (no 0x002A)');
            return false;
        }
        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
        if (firstIFDOffset < 0x00000008) {
            Debug.log('Not valid TIFF data! (First offset less than 8)', file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }
        tags = Exif.readTags(file, tiffOffset, tiffOffset + firstIFDOffset, Exif.TiffTags, bigEnd);
        if (tags.ExifIFDPointer) {
            exifData = Exif.readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, Exif.Tags, bigEnd);
            for (tag in exifData) {
                if ({}.hasOwnProperty.call(exifData, tag)) {
                    switch (tag) {
                        case 'LightSource':
                        case 'Flash':
                        case 'MeteringMode':
                        case 'ExposureProgram':
                        case 'SensingMethod':
                        case 'SceneCaptureType':
                        case 'SceneType':
                        case 'CustomRendered':
                        case 'WhiteBalance':
                        case 'GainControl':
                        case 'Contrast':
                        case 'Saturation':
                        case 'Sharpness':
                        case 'SubjectDistanceRange':
                        case 'FileSource':
                            exifData[tag] = Exif.StringValues[tag][exifData[tag]];
                            break;
                        case 'ExifVersion':
                        case 'FlashpixVersion':
                            exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                            break;
                        case 'ComponentsConfiguration':
                            var compopents = 'Components';
                            exifData[tag] = Exif.StringValues[compopents][exifData[tag][0]] + Exif.StringValues[compopents][exifData[tag][1]] + Exif.StringValues[compopents][exifData[tag][2]] + Exif.StringValues[compopents][exifData[tag][3]];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = exifData[tag];
                }
            }
        }
        if (tags.GPSInfoIFDPointer) {
            gpsData = Exif.readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, Exif.GPSTags, bigEnd);
            for (tag in gpsData) {
                if ({}.hasOwnProperty.call(gpsData, tag)) {
                    switch (tag) {
                        case 'GPSVersionID':
                            gpsData[tag] = gpsData[tag][0] + '.' + gpsData[tag][1] + '.' + gpsData[tag][2] + '.' + gpsData[tag][3];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = gpsData[tag];
                }
            }
        }
        return tags;
    };
    Exif.getData = function (img, callback) {
        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) {
            return false;
        }
        if (!Exif.imageHasData(img)) {
            Exif.getImageData(img, callback);
        }
        else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    };
    Exif.getTag = function (img, tag) {
        if (!Exif.imageHasData(img)) {
            return;
        }
        return img.exifdata[tag];
    };
    ;
    Exif.getAllTags = function (img) {
        if (!Exif.imageHasData(img)) {
            return {};
        }
        var a, data = img.exifdata, tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    };
    ;
    Exif.pretty = function (img) {
        if (!Exif.imageHasData(img)) {
            return '';
        }
        var a, data = img.exifdata, strPretty = '';
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] === 'object') {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    }
                    else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                }
                else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    };
    Exif.readFromBinaryFile = function (file) {
        return Exif.findEXIFinJPEG(file);
    };
    return Exif;
}());

Exif.debug = false;
Exif.IptcFieldMap = {
    0x78: 'caption',
    0x6E: 'credit',
    0x19: 'keywords',
    0x37: 'dateCreated',
    0x50: 'byline',
    0x55: 'bylineTitle',
    0x7A: 'captionWriter',
    0x69: 'headline',
    0x74: 'copyright',
    0x0F: 'category'
};
Exif.Tags = {
    // version tags
    0x9000: 'ExifVersion',
    0xA000: 'FlashpixVersion',
    // colorspace tags
    0xA001: 'ColorSpace',
    // image configuration
    0xA002: 'PixelXDimension',
    0xA003: 'PixelYDimension',
    0x9101: 'ComponentsConfiguration',
    0x9102: 'CompressedBitsPerPixel',
    // user information
    0x927C: 'MakerNote',
    0x9286: 'UserComment',
    // related file
    0xA004: 'RelatedSoundFile',
    // date and time
    0x9003: 'DateTimeOriginal',
    0x9004: 'DateTimeDigitized',
    0x9290: 'SubsecTime',
    0x9291: 'SubsecTimeOriginal',
    0x9292: 'SubsecTimeDigitized',
    // picture-taking conditions
    0x829A: 'ExposureTime',
    0x829D: 'FNumber',
    0x8822: 'ExposureProgram',
    0x8824: 'SpectralSensitivity',
    0x8827: 'ISOSpeedRatings',
    0x8828: 'OECF',
    0x9201: 'ShutterSpeedValue',
    0x9202: 'ApertureValue',
    0x9203: 'BrightnessValue',
    0x9204: 'ExposureBias',
    0x9205: 'MaxApertureValue',
    0x9206: 'SubjectDistance',
    0x9207: 'MeteringMode',
    0x9208: 'LightSource',
    0x9209: 'Flash',
    0x9214: 'SubjectArea',
    0x920A: 'FocalLength',
    0xA20B: 'FlashEnergy',
    0xA20C: 'SpatialFrequencyResponse',
    0xA20E: 'FocalPlaneXResolution',
    0xA20F: 'FocalPlaneYResolution',
    0xA210: 'FocalPlaneResolutionUnit',
    0xA214: 'SubjectLocation',
    0xA215: 'ExposureIndex',
    0xA217: 'SensingMethod',
    0xA300: 'FileSource',
    0xA301: 'SceneType',
    0xA302: 'CFAPattern',
    0xA401: 'CustomRendered',
    0xA402: 'ExposureMode',
    0xA403: 'WhiteBalance',
    0xA404: 'DigitalZoomRation',
    0xA405: 'FocalLengthIn35mmFilm',
    0xA406: 'SceneCaptureType',
    0xA407: 'GainControl',
    0xA408: 'Contrast',
    0xA409: 'Saturation',
    0xA40A: 'Sharpness',
    0xA40B: 'DeviceSettingDescription',
    0xA40C: 'SubjectDistanceRange',
    // other tags
    0xA005: 'InteroperabilityIFDPointer', 0xA420: 'ImageUniqueID' // Identifier assigned uniquely to each image
};
Exif.TiffTags = {
    0x0100: 'ImageWidth',
    0x0101: 'ImageHeight',
    0x8769: 'ExifIFDPointer',
    0x8825: 'GPSInfoIFDPointer',
    0xA005: 'InteroperabilityIFDPointer',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x011C: 'PlanarConfiguration',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x011A: 'XResolution',
    0x011B: 'YResolution',
    0x0128: 'ResolutionUnit',
    0x0111: 'StripOffsets',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x012D: 'TransferFunction',
    0x013E: 'WhitePoint',
    0x013F: 'PrimaryChromaticities',
    0x0211: 'YCbCrCoefficients',
    0x0214: 'ReferenceBlackWhite',
    0x0132: 'DateTime',
    0x010E: 'ImageDescription',
    0x010F: 'Make',
    0x0110: 'Model',
    0x0131: 'Software',
    0x013B: 'Artist',
    0x8298: 'Copyright'
};
Exif.GPSTags = {
    0x0000: 'GPSVersionID',
    0x0001: 'GPSLatitudeRef',
    0x0002: 'GPSLatitude',
    0x0003: 'GPSLongitudeRef',
    0x0004: 'GPSLongitude',
    0x0005: 'GPSAltitudeRef',
    0x0006: 'GPSAltitude',
    0x0007: 'GPSTimeStamp',
    0x0008: 'GPSSatellites',
    0x0009: 'GPSStatus',
    0x000A: 'GPSMeasureMode',
    0x000B: 'GPSDOP',
    0x000C: 'GPSSpeedRef',
    0x000D: 'GPSSpeed',
    0x000E: 'GPSTrackRef',
    0x000F: 'GPSTrack',
    0x0010: 'GPSImgDirectionRef',
    0x0011: 'GPSImgDirection',
    0x0012: 'GPSMapDatum',
    0x0013: 'GPSDestLatitudeRef',
    0x0014: 'GPSDestLatitude',
    0x0015: 'GPSDestLongitudeRef',
    0x0016: 'GPSDestLongitude',
    0x0017: 'GPSDestBearingRef',
    0x0018: 'GPSDestBearing',
    0x0019: 'GPSDestDistanceRef',
    0x001A: 'GPSDestDistance',
    0x001B: 'GPSProcessingMethod',
    0x001C: 'GPSAreaInformation',
    0x001D: 'GPSDateStamp',
    0x001E: 'GPSDifferential'
};
Exif.StringValues = {
    ExposureProgram: {
        0: 'Not defined',
        1: 'Manual',
        2: 'Normal program',
        3: 'Aperture priority',
        4: 'Shutter priority',
        5: 'Creative program',
        6: 'Action program',
        7: 'Portrait mode',
        8: 'Landscape mode'
    }, MeteringMode: {
        0: 'Unknown',
        1: 'Average',
        2: 'CenterWeightedAverage',
        3: 'Spot',
        4: 'MultiSpot',
        5: 'Pattern',
        6: 'Partial',
        255: 'Other'
    }, LightSource: {
        0: 'Unknown',
        1: 'Daylight',
        2: 'Fluorescent',
        3: 'Tungsten (incandescent light)',
        4: 'Flash',
        9: 'Fine weather',
        10: 'Cloudy weather',
        11: 'Shade',
        12: 'Daylight fluorescent (D 5700 - 7100K)',
        13: 'Day white fluorescent (N 4600 - 5400K)',
        14: 'Cool white fluorescent (W 3900 - 4500K)',
        15: 'White fluorescent (WW 3200 - 3700K)',
        17: 'Standard light A',
        18: 'Standard light B',
        19: 'Standard light C',
        20: 'D55',
        21: 'D65',
        22: 'D75',
        23: 'D50',
        24: 'ISO studio tungsten',
        255: 'Other'
    }, Flash: {
        0x0000: 'Flash did not fire',
        0x0001: 'Flash fired',
        0x0005: 'Strobe return light not detected',
        0x0007: 'Strobe return light detected',
        0x0009: 'Flash fired, compulsory flash mode',
        0x000D: 'Flash fired, compulsory flash mode, return light not detected',
        0x000F: 'Flash fired, compulsory flash mode, return light detected',
        0x0010: 'Flash did not fire, compulsory flash mode',
        0x0018: 'Flash did not fire, auto mode',
        0x0019: 'Flash fired, auto mode',
        0x001D: 'Flash fired, auto mode, return light not detected',
        0x001F: 'Flash fired, auto mode, return light detected',
        0x0020: 'No flash function',
        0x0041: 'Flash fired, red-eye reduction mode',
        0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
        0x0047: 'Flash fired, red-eye reduction mode, return light detected',
        0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
        0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
        0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
        0x0059: 'Flash fired, auto mode, red-eye reduction mode',
        0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
        0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
    }, SensingMethod: {
        1: 'Not defined',
        2: 'One-chip color area sensor',
        3: 'Two-chip color area sensor',
        4: 'Three-chip color area sensor',
        5: 'Color sequential area sensor',
        7: 'Trilinear sensor',
        8: 'Color sequential linear sensor'
    }, SceneCaptureType: {
        0: 'Standard', 1: 'Landscape', 2: 'Portrait', 3: 'Night scene'
    }, SceneType: {
        1: 'Directly photographed'
    }, CustomRendered: {
        0: 'Normal process', 1: 'Custom process'
    }, WhiteBalance: {
        0: 'Auto white balance', 1: 'Manual white balance'
    }, GainControl: {
        0: 'None', 1: 'Low gain up', 2: 'High gain up', 3: 'Low gain down', 4: 'High gain down'
    }, Contrast: {
        0: 'Normal', 1: 'Soft', 2: 'Hard'
    }, Saturation: {
        0: 'Normal', 1: 'Low saturation', 2: 'High saturation'
    }, Sharpness: {
        0: 'Normal', 1: 'Soft', 2: 'Hard'
    }, SubjectDistanceRange: {
        0: 'Unknown', 1: 'Macro', 2: 'Close view', 3: 'Distant view'
    }, FileSource: {
        3: 'DSC'
    },
    Components: {
        0: '', 1: 'Y', 2: 'Cb', 3: 'Cr', 4: 'R', 5: 'G', 6: 'B'
    }
};
//# sourceMappingURL=exif.js.map

/***/ }),

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperDataShare; });
var ImageCropperDataShare = (function () {
    function ImageCropperDataShare() {
    }
    ImageCropperDataShare.setPressed = function (canvas) {
        this.pressed = canvas;
    };
    ;
    ImageCropperDataShare.setReleased = function (canvas) {
        if (canvas === this.pressed) {
            //  this.pressed = undefined;
        }
    };
    ;
    ImageCropperDataShare.setOver = function (canvas) {
        this.over = canvas;
    };
    ;
    ImageCropperDataShare.setStyle = function (canvas, style) {
        if (this.pressed !== undefined) {
            if (this.pressed === canvas) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
        else {
            if (canvas === this.over) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
    };
    ;
    return ImageCropperDataShare;
}());

ImageCropperDataShare.share = {};
//# sourceMappingURL=imageCropperDataShare.js.map

/***/ }),

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__ = __webpack_require__(938);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperModule; });



var ImageCropperModule = (function () {
    function ImageCropperModule() {
    }
    return ImageCropperModule;
}());

ImageCropperModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__["a" /* ImageCropperComponent */]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__["a" /* ImageCropperComponent */]]
            },] },
];
/** @nocollapse */
ImageCropperModule.ctorParameters = function () { return []; };
//# sourceMappingURL=imageCropperModule.js.map

/***/ }),

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle__ = __webpack_require__(940);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CornerMarker; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CornerMarker = (function (_super) {
    __extends(CornerMarker, _super);
    function CornerMarker(x, y, radius, cropperSettings) {
        return _super.call(this, x, y, radius, cropperSettings) || this;
    }
    CornerMarker.prototype.drawCornerBorder = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        if (this.cropperSettings.rounded) {
            var width = this.position.x - this.horizontalNeighbour.position.x;
            var height = this.position.y - this.verticalNeighbour.position.y;
            var offX = Math.round(Math.sin(Math.PI / 2) * Math.abs(width / 2)) / 4;
            var offY = Math.round(Math.sin(Math.PI / 2) * Math.abs(height / 2)) / 4;
            this.offset.x = hDirection > 0 ? offX : -offX;
            this.offset.y = vDirection > 0 ? offY : -offY;
        }
        else {
            this.offset.x = 0;
            this.offset.y = 0;
        }
        ctx.beginPath();
        ctx.lineJoin = 'miter';
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor;
        ctx.stroke();
    };
    CornerMarker.prototype.drawCornerFill = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,255,255,.7)';
        ctx.fill();
    };
    CornerMarker.prototype.moveX = function (x) {
        this.setPosition(x, this.position.y);
    };
    CornerMarker.prototype.moveY = function (y) {
        this.setPosition(this.position.x, y);
    };
    CornerMarker.prototype.move = function (x, y) {
        this.setPosition(x, y);
        this.verticalNeighbour.moveX(x);
        this.horizontalNeighbour.moveY(y);
    };
    CornerMarker.prototype.addHorizontalNeighbour = function (neighbour) {
        this.horizontalNeighbour = neighbour;
    };
    CornerMarker.prototype.addVerticalNeighbour = function (neighbour) {
        this.verticalNeighbour = neighbour;
    };
    CornerMarker.prototype.getHorizontalNeighbour = function () {
        return this.horizontalNeighbour;
    };
    CornerMarker.prototype.getVerticalNeighbour = function () {
        return this.verticalNeighbour;
    };
    CornerMarker.prototype.draw = function (ctx) {
        this.drawCornerFill(ctx);
        this.drawCornerBorder(ctx);
    };
    return CornerMarker;
}(__WEBPACK_IMPORTED_MODULE_0__handle__["a" /* Handle */]));

//# sourceMappingURL=cornerMarker.js.map

/***/ }),

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropTouch; });
var CropTouch = (function () {
    function CropTouch(x, y, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (id === void 0) { id = 0; }
        this.id = id;
        this.x = x;
        this.y = y;
    }
    return CropTouch;
}());

//# sourceMappingURL=cropTouch.js.map

/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pointPool__ = __webpack_require__(910);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragMarker; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DragMarker = (function (_super) {
    __extends(DragMarker, _super);
    function DragMarker(x, y, radius, cropperSettings) {
        var _this = _super.call(this, x, y, radius, cropperSettings) || this;
        _this.iconPoints = [];
        _this.scaledIconPoints = [];
        _this.getDragIconPoints(_this.iconPoints, 1);
        _this.getDragIconPoints(_this.scaledIconPoints, 1.2);
        return _this;
    }
    DragMarker.prototype.draw = function (ctx) {
        if (this.over || this.drag) {
            this.drawIcon(ctx, this.scaledIconPoints);
        }
        else {
            this.drawIcon(ctx, this.iconPoints);
        }
    };
    DragMarker.prototype.getDragIconPoints = function (arr, scale) {
        var maxLength = 17 * scale;
        var arrowWidth = 14 * scale;
        var arrowLength = 8 * scale;
        var connectorThroat = 4 * scale;
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(0, maxLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(arrowWidth / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength, 0));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(0, -maxLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength, 0));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, connectorThroat / 2));
    };
    DragMarker.prototype.drawIcon = function (ctx, points) {
        ctx.beginPath();
        ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);
        for (var k = 0; k < points.length; k++) {
            var p = points[k];
            ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
        }
        ctx.closePath();
        ctx.fillStyle = this.cropperSettings.cropperDrawSettings.dragIconFillColor;
        ctx.fill();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.dragIconStrokeColor;
        ctx.stroke();
    };
    DragMarker.prototype.recalculatePosition = function (bounds) {
        var c = bounds.getCentre();
        this.setPosition(c.x, c.y);
        __WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.returnPoint(c);
    };
    return DragMarker;
}(__WEBPACK_IMPORTED_MODULE_0__handle__["a" /* Handle */]));

//# sourceMappingURL=dragMarker.js.map

/***/ }),

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperModel; });
var ImageCropperModel = (function () {
    function ImageCropperModel() {
    }
    return ImageCropperModel;
}());

//# sourceMappingURL=imageCropperModel.js.map

/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng_table_component_1 = __webpack_require__(905);
var ng_table_filtering_directive_1 = __webpack_require__(902);
var ng_table_paging_directive_1 = __webpack_require__(903);
var ng_table_sorting_directive_1 = __webpack_require__(904);
exports.NG_TABLE_DIRECTIVES = [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective];


/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(15);
var ng_table_component_1 = __webpack_require__(905);
var ng_table_filtering_directive_1 = __webpack_require__(902);
var ng_table_paging_directive_1 = __webpack_require__(903);
var ng_table_sorting_directive_1 = __webpack_require__(904);
var Ng2TableModule = (function () {
    function Ng2TableModule() {
    }
    Ng2TableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective],
                    exports: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2TableModule.ctorParameters = [];
    return Ng2TableModule;
}());
exports.Ng2TableModule = Ng2TableModule;


/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng_table_component_1 = __webpack_require__(905);
var ng_table_filtering_directive_1 = __webpack_require__(902);
var ng_table_paging_directive_1 = __webpack_require__(903);
var ng_table_sorting_directive_1 = __webpack_require__(904);
__export(__webpack_require__(905));
__export(__webpack_require__(902));
__export(__webpack_require__(903));
__export(__webpack_require__(904));
__export(__webpack_require__(1009));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [
        ng_table_component_1.NgTableComponent,
        ng_table_filtering_directive_1.NgTableFilteringDirective,
        ng_table_sorting_directive_1.NgTableSortingDirective,
        ng_table_paging_directive_1.NgTablePagingDirective
    ]
};
var ng_table_module_1 = __webpack_require__(1010);
exports.Ng2TableModule = ng_table_module_1.Ng2TableModule;


/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(3), __webpack_require__(15), __webpack_require__(453), __webpack_require__(159), __webpack_require__(68));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common", "rxjs/add/operator/debounceTime", "rxjs/add/operator/filter", "rxjs/add/operator/map"], factory);
	else if(typeof exports === 'object')
		exports["ng2-tag-input"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("rxjs/add/operator/debounceTime"), require("rxjs/add/operator/filter"), require("rxjs/add/operator/map"));
	else
		root["ng2-tag-input"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"], root["rxjs/add/operator/debounceTime"], root["rxjs/add/operator/filter"], root["rxjs/add/operator/map"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25).Buffer))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var tag_input_1 = __webpack_require__(12);
var ng2_material_dropdown_1 = __webpack_require__(10);
__webpack_require__(6);
__webpack_require__(5);
var TagInputDropdown = (function () {
    function TagInputDropdown(tagInput) {
        var _this = this;
        this.tagInput = tagInput;
        this.offset = '50 0';
        this.focusFirstElement = false;
        this.showDropdownIfEmpty = false;
        this.minimumTextLength = 1;
        this.displayBy = 'display';
        this.identifyBy = 'value';
        this.matchingFn = function (value, target) {
            var targetValue = target[_this.displayBy].toString();
            return targetValue && targetValue
                .toLowerCase()
                .indexOf(value.toLowerCase()) >= 0;
        };
        this.appendToBody = true;
        this.items = [];
        this._autocompleteItems = [];
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_a = {},
                    _a[_this.displayBy] = item,
                    _a[_this.identifyBy] = item,
                    _a) : item;
                var _a;
            });
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.onItemClicked()
            .subscribe(this.addNewItem.bind(this));
        this.onHide()
            .subscribe(this.resetItems.bind(this));
        this.tagInput.inputForm.onKeyup
            .subscribe(this.show.bind(this));
        if (this.autocompleteObservable) {
            this.tagInput
                .onTextChange
                .filter(function (text) { return text.trim().length >= _this.minimumTextLength; })
                .subscribe(this.getItemsFromObservable.bind(this));
        }
    };
    TagInputDropdown.prototype.updatePosition = function () {
        this.dropdown.menu.updatePosition(this.tagInput.inputForm.getElementPosition());
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.addNewItem = function (item) {
        if (!item) {
            return;
        }
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        var model = __assign({}, item.value, { display: display, value: value });
        this.tagInput.addItem(true, model);
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.show = function () {
        var value = this.tagInput.inputForm.value.value.trim();
        var position = this.tagInput.inputForm.getElementPosition();
        var items = this.getMatchingItems(value);
        var hasItems = items.length > 0;
        var showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
        var hasMinimumText = value.length >= this.minimumTextLength;
        var assertions = [
            hasItems,
            this.isVisible === false,
            hasMinimumText
        ];
        var showDropdown = (assertions.filter(function (item) { return item; }).length === assertions.length) ||
            showDropdownIfEmpty;
        var hideDropdown = this.isVisible && (!hasItems || !hasMinimumText);
        this.setItems(items);
        if (showDropdown && !this.isVisible) {
            this.dropdown.show(position);
        }
        else if (hideDropdown) {
            this.dropdown.hide();
        }
    };
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        return this.autocompleteItems.filter(function (item) {
            var hasValue = _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && hasValue === false;
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.resetItems = function () {
        this.items = [];
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_a = {},
                _a[_this.displayBy] = item,
                _a[_this.identifyBy] = item,
                _a) : item;
            var _a;
        });
        return this;
    };
    TagInputDropdown.prototype.getItemsFromObservable = function (text) {
        var _this = this;
        this.setLoadingState(true);
        this.autocompleteObservable(text)
            .subscribe(function (data) {
            _this.setLoadingState(false)
                .populateItems(data)
                .show();
        }, function () { return _this.setLoadingState(false); });
    };
    TagInputDropdown.prototype.setLoadingState = function (state) {
        this.tagInput.isLoading = state;
        return this;
    };
    return TagInputDropdown;
}());
__decorate([
    core_1.ViewChild(ng2_material_dropdown_1.Ng2Dropdown),
    __metadata("design:type", ng2_material_dropdown_1.Ng2Dropdown)
], TagInputDropdown.prototype, "dropdown", void 0);
__decorate([
    core_1.ContentChildren(core_1.TemplateRef),
    __metadata("design:type", core_1.QueryList)
], TagInputDropdown.prototype, "templates", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "offset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "focusFirstElement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TagInputDropdown.prototype, "autocompleteObservable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "minimumTextLength", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TagInputDropdown.prototype, "limitItemsTo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "displayBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "identifyBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TagInputDropdown.prototype, "matchingFn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "appendToBody", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TagInputDropdown.prototype, "autocompleteItems", null);
__decorate([
    core_1.HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagInputDropdown.prototype, "scrollListener", null);
TagInputDropdown = __decorate([
    core_1.Component({
        selector: 'tag-input-dropdown',
        template: __webpack_require__(30)
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return tag_input_1.TagInputComponent; }))),
    __metadata("design:paramtypes", [tag_input_1.TagInputComponent])
], TagInputDropdown);
exports.TagInputDropdown = TagInputDropdown;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var TagRipple = (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagRipple.prototype, "state", void 0);
TagRipple = __decorate([
    core_1.Component({
        selector: 'tag-ripple',
        styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
        template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
        animations: [
            core_1.trigger('ink', [
                core_1.state('none', core_1.style({ width: 0, opacity: 0 })),
                core_1.transition('none => clicked', [
                    core_1.animate(300, core_1.keyframes([
                        core_1.style({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                        core_1.style({ opacity: 1, offset: 0.5, width: '50%' }),
                        core_1.style({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                    ]))
                ])
            ])
        ]
    })
], TagRipple);
exports.TagRipple = TagRipple;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var tag_ripple_component_1 = __webpack_require__(8);
var KeyboardEvent = global.KeyboardEvent;
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = (function () {
    function TagComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.disabled = false;
        this.onSelect = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onKeyDown = new core_1.EventEmitter();
        this.onTagEdited = new core_1.EventEmitter();
        this.editModeActivated = false;
        this.rippleState = 'none';
    }
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    TagComponent.prototype.remove = function () {
        this.onRemove.emit(this);
    };
    TagComponent.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement, 'focus');
    };
    TagComponent.prototype.keydown = function (event) {
        if (this.editModeActivated) {
            event.keyCode === 13 ? this.disableEditMode(event) : this.storeNewValue();
            return;
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    TagComponent.prototype.toggleEditMode = function (event) {
        if (this.editModeActivated) {
            this.storeNewValue();
        }
        else {
            this.element.nativeElement.querySelector('[contenteditable]').focus();
        }
        this.editModeActivated = !this.editModeActivated;
        this.renderer.setElementClass(this.element.nativeElement, 'tag--editing', this.editModeActivated);
    };
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    TagComponent.prototype.getContentEditableText = function () {
        return this.element.nativeElement.querySelector('[contenteditable]').innerText.trim();
    };
    TagComponent.prototype.disableEditMode = function ($event) {
        this.editModeActivated = false;
        $event.preventDefault();
    };
    TagComponent.prototype.storeNewValue = function () {
        var _this = this;
        var input = this.getContentEditableText();
        var exists = function (model) {
            return typeof model === 'string' ?
                model === input :
                model[_this.identifyBy] === input;
        };
        if (exists(this.model)) {
            var itemValue = this.model[this.identifyBy];
            this.model = typeof this.model === 'string' ? input : (_a = {}, _a[this.identifyBy] = itemValue, _a[this.displayBy] = itemValue, _a);
            this.onTagEdited.emit(this.model);
        }
        var _a;
    };
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly &&
            !this.disabled &&
            this.removable &&
            !this.editModeActivated;
    };
    TagComponent.prototype.isRippleVisible = function () {
        return !this.readonly &&
            !this.editModeActivated &&
            isChrome &&
            this.hasRipple;
    };
    return TagComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "removable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "editable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], TagComponent.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagComponent.prototype, "displayBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagComponent.prototype, "identifyBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TagComponent.prototype, "index", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "hasRipple", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onRemove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onBlur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onKeyDown", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onTagEdited", void 0);
__decorate([
    core_1.ViewChild(tag_ripple_component_1.TagRipple),
    __metadata("design:type", tag_ripple_component_1.TagRipple)
], TagComponent.prototype, "ripple", void 0);
__decorate([
    core_1.HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TagComponent.prototype, "keydown", null);
TagComponent = __decorate([
    core_1.Component({
        selector: 'tag',
        template: __webpack_require__(34),
        styles: [__webpack_require__(40)]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], TagComponent);
exports.TagComponent = TagComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(2));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-dropdown"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ng2-dropdown"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var ng2_dropdown_1 = __webpack_require__(1);
	exports.Ng2Dropdown = ng2_dropdown_1.Ng2Dropdown;
	var ng2_dropdown_menu_1 = __webpack_require__(6);
	exports.Ng2DropdownMenu = ng2_dropdown_menu_1.Ng2DropdownMenu;
	var ng2_dropdown_button_1 = __webpack_require__(3);
	exports.Ng2DropdownButton = ng2_dropdown_button_1.Ng2DropdownButton;
	var ng2_menu_item_1 = __webpack_require__(8);
	exports.Ng2MenuItem = ng2_menu_item_1.Ng2MenuItem;
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(16);
	var dropdown_state_service_1 = __webpack_require__(9);
	exports.DropdownStateService = dropdown_state_service_1.DropdownStateService;
	var Ng2DropdownModule = (function () {
	    function Ng2DropdownModule() {
	    }
	    return Ng2DropdownModule;
	}());
	Ng2DropdownModule = __decorate([
	    core_1.NgModule({
	        exports: [
	            ng2_menu_item_1.Ng2MenuItem,
	            ng2_dropdown_button_1.Ng2DropdownButton,
	            ng2_dropdown_menu_1.Ng2DropdownMenu,
	            ng2_dropdown_1.Ng2Dropdown
	        ],
	        declarations: [
	            ng2_dropdown_1.Ng2Dropdown,
	            ng2_menu_item_1.Ng2MenuItem,
	            ng2_dropdown_button_1.Ng2DropdownButton,
	            ng2_dropdown_menu_1.Ng2DropdownMenu,
	        ],
	        imports: [common_1.CommonModule]
	    })
	], Ng2DropdownModule);
	exports.Ng2DropdownModule = Ng2DropdownModule;
	

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var ng2_dropdown_button_1 = __webpack_require__(3);
	var ng2_dropdown_menu_1 = __webpack_require__(6);
	var dropdown_state_service_1 = __webpack_require__(9);
	var Ng2Dropdown = (function () {
	    function Ng2Dropdown(state) {
	        this.state = state;
	        this.dynamicUpdate = true;
	        this.onItemClicked = new core_1.EventEmitter();
	        this.onItemSelected = new core_1.EventEmitter();
	        this.onShow = new core_1.EventEmitter();
	        this.onHide = new core_1.EventEmitter();
	    }
	    Ng2Dropdown.prototype.toggleMenu = function (position) {
	        if (position === void 0) { position = this.button.getPosition(); }
	        this.state.menuState.isVisible ? this.hide() : this.show(position);
	    };
	    Ng2Dropdown.prototype.hide = function () {
	        this.menu.hide();
	        this.onHide.emit(this);
	    };
	    Ng2Dropdown.prototype.show = function (position) {
	        if (position === void 0) { position = this.button.getPosition(); }
	        this.menu.show();
	        this.menu.updatePosition(position);
	        this.onShow.emit(this);
	    };
	    Ng2Dropdown.prototype.scrollListener = function () {
	        if (this.state.menuState.isVisible && this.button && this.dynamicUpdate) {
	            this.menu.updatePosition(this.button.getPosition());
	        }
	    };
	    Ng2Dropdown.prototype.ngOnInit = function () {
	        var _this = this;
	        this.state.dropdownState.onItemClicked.subscribe(function (item) {
	            _this.onItemClicked.emit(item);
	            if (item.preventClose) {
	                return;
	            }
	            _this.hide.call(_this);
	        });
	        if (this.button) {
	            this.button.onMenuToggled.subscribe(function () {
	                _this.toggleMenu();
	            });
	        }
	        this.state.dropdownState.onItemSelected.subscribe(function (item) { return _this.onItemSelected.emit(item); });
	    };
	    return Ng2Dropdown;
	}());
	__decorate([
	    core_1.ContentChild(ng2_dropdown_button_1.Ng2DropdownButton),
	    __metadata("design:type", ng2_dropdown_button_1.Ng2DropdownButton)
	], Ng2Dropdown.prototype, "button", void 0);
	__decorate([
	    core_1.ContentChild(ng2_dropdown_menu_1.Ng2DropdownMenu),
	    __metadata("design:type", ng2_dropdown_menu_1.Ng2DropdownMenu)
	], Ng2Dropdown.prototype, "menu", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2Dropdown.prototype, "dynamicUpdate", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onItemClicked", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onItemSelected", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onShow", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onHide", void 0);
	__decorate([
	    core_1.HostListener('window:scroll'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], Ng2Dropdown.prototype, "scrollListener", null);
	Ng2Dropdown = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown',
	        template: __webpack_require__(15),
	        providers: [dropdown_state_service_1.DropdownStateService]
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService])
	], Ng2Dropdown);
	exports.Ng2Dropdown = Ng2Dropdown;
	

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var Ng2DropdownButton = (function () {
	    function Ng2DropdownButton(element) {
	        this.element = element;
	        this.onMenuToggled = new core_1.EventEmitter();
	        this.showCaret = true;
	    }
	    Ng2DropdownButton.prototype.toggleMenu = function () {
	        this.onMenuToggled.emit(true);
	    };
	    Ng2DropdownButton.prototype.getPosition = function () {
	        return this.element.nativeElement.getBoundingClientRect();
	    };
	    return Ng2DropdownButton;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownButton.prototype, "showCaret", void 0);
	Ng2DropdownButton = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown-button',
	        styles: [__webpack_require__(4)],
	        template: __webpack_require__(5)
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], Ng2DropdownButton);
	exports.Ng2DropdownButton = Ng2DropdownButton;
	

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ".ng2-dropdown-button {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n  background: #fff;\n  padding: 0.45rem 0.25rem;\n  font-size: 14px;\n  letter-spacing: 0.08rem;\n  color: #444;\n  outline: 0;\n  cursor: pointer;\n  font-weight: 400;\n  border: none;\n  border-bottom: 1px solid #efefef;\n  text-align: left;\n  min-width: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 150px; }\n\n.ng2-dropdown-button:hover {\n  color: #222; }\n\n.ng2-dropdown-button:active, .ng2-dropdown-button:focus {\n  color: #222;\n  border-bottom: 2px solid #2196F3; }\n\n.ng2-dropdown-button__label {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 95%;\n          flex: 1 1 95%; }\n\n.ng2-dropdown-button__caret {\n  width: 12px;\n  height: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 6%;\n          flex: 1 1 6%; }\n\n:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button {\n  border: none;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 100%;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  text-align: center;\n  height: 40px;\n  padding: 0.5em; }\n\n:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active {\n  background: rgba(0, 0, 0, 0.2); }\n"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"Слой_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var actions_1 = __webpack_require__(7);
	var ng2_menu_item_1 = __webpack_require__(8);
	var dropdown_state_service_1 = __webpack_require__(9);
	var Ng2DropdownMenu = (function () {
	    function Ng2DropdownMenu(state, element, renderer) {
	        this.state = state;
	        this.element = element;
	        this.renderer = renderer;
	        this.width = 4;
	        this.focusFirstElement = true;
	        this.appendToBody = true;
	        this.listeners = {
	            arrowHandler: undefined,
	            handleKeypress: undefined
	        };
	    }
	    Ng2DropdownMenu.prototype.show = function () {
	        this.state.menuState.isVisible = true;
	        this.listeners.handleKeypress = this.renderer.listen(document.body, 'keydown', this.handleKeypress.bind(this));
	        this.listeners.arrowHandler = this.renderer.listen(window, 'keydown', actions_1.arrowKeysHandler);
	    };
	    Ng2DropdownMenu.prototype.hide = function () {
	        this.state.menuState.isVisible = false;
	        this.state.dropdownState.unselect();
	        this.listeners.arrowHandler();
	        this.listeners.handleKeypress();
	    };
	    Ng2DropdownMenu.prototype.updatePosition = function (position) {
	        this.position = position;
	        this.ngDoCheck();
	    };
	    Ng2DropdownMenu.prototype.handleKeypress = function ($event) {
	        var key = $event.keyCode;
	        var items = this.items.toArray();
	        var index = items.indexOf(this.state.dropdownState.selectedItem);
	        if (!actions_1.ACTIONS.hasOwnProperty(key)) {
	            return;
	        }
	        actions_1.ACTIONS[key].call(this, index, items, this.state.dropdownState);
	    };
	    Ng2DropdownMenu.prototype.getMenuElement = function () {
	        return this.element.nativeElement.children[0];
	    };
	    Ng2DropdownMenu.prototype.calcPositionOffset = function (position) {
	        if (!position) {
	            return;
	        }
	        var element = this.getMenuElement();
	        var supportPageOffset = window.pageXOffset !== undefined;
	        var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
	        var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ?
	            document.documentElement.scrollLeft : document.body.scrollLeft;
	        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ?
	            document.documentElement.scrollTop : document.body.scrollTop;
	        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
	        var clientWidth = element.clientWidth;
	        var clientHeight = element.clientHeight;
	        var marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
	        var marginFromRight = parseInt(left) + clientWidth;
	        var windowScrollHeight = window.innerHeight + window.scrollY;
	        var windowScrollWidth = window.innerWidth + window.scrollX;
	        if (marginFromBottom >= windowScrollHeight) {
	            top = parseInt(top.replace('px', '')) - clientHeight + "px";
	        }
	        if (marginFromRight >= windowScrollWidth) {
	            var marginRight = marginFromRight - windowScrollWidth + 30;
	            left = parseInt(left.replace('px', '')) - marginRight + "px";
	        }
	        return { top: top, left: left };
	    };
	    Ng2DropdownMenu.prototype.applyOffset = function (top, left) {
	        if (!this.offset) {
	            return { top: top, left: left };
	        }
	        var offset = this.offset.split(' ');
	        if (!offset[1]) {
	            offset[1] = '0';
	        }
	        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
	        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
	        return { top: top, left: left };
	    };
	    Ng2DropdownMenu.prototype.ngOnInit = function () {
	        if (this.appendToBody) {
	            document.body.appendChild(this.element.nativeElement);
	        }
	    };
	    Ng2DropdownMenu.prototype.ngDoCheck = function () {
	        if (this.state.menuState.isVisible && this.position) {
	            var element = this.getMenuElement();
	            var position = this.calcPositionOffset(this.position);
	            if (position) {
	                this.renderer.setElementStyle(element, 'top', position.top);
	                this.renderer.setElementStyle(element, 'left', position.left);
	            }
	            if (this.focusFirstElement &&
	                this.items.first &&
	                !this.state.dropdownState.selectedItem) {
	                this.state.dropdownState.select(this.items.first, false);
	            }
	        }
	    };
	    Ng2DropdownMenu.prototype.ngOnDestroy = function () {
	        var elem = this.element.nativeElement;
	        elem.parentNode.removeChild(elem);
	        if (this.listeners.handleKeypress) {
	            this.listeners.handleKeypress();
	        }
	    };
	    return Ng2DropdownMenu;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], Ng2DropdownMenu.prototype, "width", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], Ng2DropdownMenu.prototype, "offset", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownMenu.prototype, "appendToBody", void 0);
	__decorate([
	    core_1.ContentChildren(ng2_menu_item_1.Ng2MenuItem),
	    __metadata("design:type", core_1.QueryList)
	], Ng2DropdownMenu.prototype, "items", void 0);
	Ng2DropdownMenu = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown-menu',
	        styles: [__webpack_require__(13)],
	        template: __webpack_require__(14),
	        animations: [
	            core_1.trigger('fade', [
	                core_1.state('visible', core_1.style({ display: 'block', overflow: '*' })),
	                core_1.state('hidden', core_1.style({ display: 'none', overflow: 'hidden', width: '0' })),
	                core_1.transition('hidden => visible', [
	                    core_1.animate(150, core_1.keyframes([
	                        core_1.style({ opacity: 0, offset: 0, height: '0', width: '0' }),
	                        core_1.style({ opacity: 1, offset: 1, height: '*', width: '*' }),
	                    ]))
	                ]),
	                core_1.transition('visible => hidden', [
	                    core_1.animate(250, core_1.keyframes([
	                        core_1.style({ opacity: 1, offset: 0, height: '*', width: '*' }),
	                        core_1.style({ opacity: 0, offset: 1, height: '0', width: '0' }),
	                    ]))
	                ])
	            ]),
	            core_1.trigger('opacity', [
	                core_1.transition('hidden => visible', [
	                    core_1.animate(450, core_1.keyframes([
	                        core_1.style({ opacity: 0, offset: 0 }),
	                        core_1.style({ opacity: 1, offset: 1 }),
	                    ]))
	                ]),
	                core_1.transition('visible => hidden', [
	                    core_1.animate(200, core_1.keyframes([
	                        core_1.style({ opacity: 1, offset: 0 }),
	                        core_1.style({ opacity: 0.5, offset: 0.3 }),
	                        core_1.style({ opacity: 0, offset: 1 }),
	                    ]))
	                ])
	            ])
	        ]
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService,
	        core_1.ElementRef,
	        core_1.Renderer])
	], Ng2DropdownMenu);
	exports.Ng2DropdownMenu = Ng2DropdownMenu;
	

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var KEYS = {
	    BACKSPACE: 9,
	    PREV: 38,
	    NEXT: 40,
	    ENTER: 13
	};
	var onSwitchNext = function (index, items, state) {
	    if (index < items.length - 1) {
	        state.select(items[index + 1], true);
	    }
	};
	var onSwitchPrev = function (index, items, state) {
	    if (index > 0) {
	        state.select(items[index - 1], true);
	    }
	};
	var onBackspace = function (index, items, state) {
	    if (index < items.length - 1) {
	        state.select(items[index + 1], true);
	    }
	    else {
	        state.select(items[0], true);
	    }
	};
	var onItemClicked = function (index, items, state) {
	    return state.selectedItem ? state.selectedItem.click() : undefined;
	};
	exports.ACTIONS = (_a = {},
	    _a[KEYS.BACKSPACE] = onBackspace,
	    _a[KEYS.PREV] = onSwitchPrev,
	    _a[KEYS.NEXT] = onSwitchNext,
	    _a[KEYS.ENTER] = onItemClicked,
	    _a);
	function arrowKeysHandler(event) {
	    if ([38, 40].indexOf(event.keyCode) > -1) {
	        event.preventDefault();
	    }
	}
	exports.arrowKeysHandler = arrowKeysHandler;
	var _a;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var dropdown_state_service_1 = __webpack_require__(9);
	var Ng2MenuItem = (function () {
	    function Ng2MenuItem(state, element, renderer) {
	        this.state = state;
	        this.element = element;
	        this.renderer = renderer;
	        this.preventClose = false;
	    }
	    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
	        get: function () {
	            return this === this.state.dropdownState.selectedItem;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ng2MenuItem.prototype.select = function ($event) {
	        this.state.dropdownState.select(this, true);
	        if ($event) {
	            $event.stopPropagation();
	            $event.preventDefault();
	        }
	    };
	    Ng2MenuItem.prototype.click = function () {
	        this.state.dropdownState.onItemClicked.emit(this);
	    };
	    Ng2MenuItem.prototype.focus = function () {
	        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
	    };
	    return Ng2MenuItem;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2MenuItem.prototype, "preventClose", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], Ng2MenuItem.prototype, "value", void 0);
	Ng2MenuItem = __decorate([
	    core_1.Component({
	        selector: 'ng2-menu-item',
	        styles: [__webpack_require__(11)],
	        template: __webpack_require__(12)
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService,
	        core_1.ElementRef,
	        core_1.Renderer])
	], Ng2MenuItem);
	exports.Ng2MenuItem = Ng2MenuItem;
	

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var ng2_dropdown_state_1 = __webpack_require__(10);
	var DropdownStateService = (function () {
	    function DropdownStateService() {
	        this.menuState = {
	            isVisible: false,
	            toString: function () {
	                return this.isVisible === true ? 'visible' : 'hidden';
	            }
	        };
	        this.dropdownState = new ng2_dropdown_state_1.Ng2DropdownState();
	    }
	    return DropdownStateService;
	}());
	DropdownStateService = __decorate([
	    core_1.Injectable()
	], DropdownStateService);
	exports.DropdownStateService = DropdownStateService;
	

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var Ng2DropdownState = (function () {
	    function Ng2DropdownState() {
	        this.onItemSelected = new core_1.EventEmitter();
	        this.onItemClicked = new core_1.EventEmitter();
	    }
	    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
	        get: function () {
	            return this._selectedItem;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ng2DropdownState.prototype.select = function (item, dispatchEvent) {
	        if (dispatchEvent === void 0) { dispatchEvent = true; }
	        this._selectedItem = item;
	        if (!dispatchEvent) {
	            return;
	        }
	        item.focus();
	        this.onItemSelected.emit(item);
	    };
	    Ng2DropdownState.prototype.unselect = function () {
	        this._selectedItem = undefined;
	    };
	    return Ng2DropdownState;
	}());
	exports.Ng2DropdownState = Ng2DropdownState;
	

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = ".ng2-menu-item {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  font-size: 0.9em;\n  text-transform: none;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  height: 48px;\n  line-height: 48px;\n  padding: 0.3em 1.25rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-transition: background 0.25s;\n  transition: background 0.25s; }\n\n.ng2-menu-item--selected {\n  background: rgba(158, 158, 158, 0.2);\n  outline: 0; }\n\n.ng2-menu-item:focus {\n  outline: 0; }\n\n.ng2-menu-item:active {\n  background: rgba(158, 158, 158, 0.4); }\n\n:host(ng2-menu-item) /deep/ [ng2-menu-item-icon] {\n  vertical-align: middle;\n  font-size: 28px;\n  width: 1.5em;\n  height: 30px;\n  color: rgba(0, 0, 0, 0.44); }\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = ".ng2-dropdown-menu {\n  z-index: 100;\n  overflow-y: auto;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n  position: absolute;\n  padding: 0.5em 0;\n  background: #fff;\n  border-radius: 1px;\n  max-height: 400px;\n  width: 260px;\n  display: block; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--inside-element {\n  position: fixed; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--2 {\n  width: 200px; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--4 {\n  width: 260px; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--6 {\n  width: 320px; }\n\n.ng2-dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  overflow: hidden; }\n\n:host /deep/ .ng2-menu-divider {\n  height: 1px;\n  min-height: 1px;\n  max-height: 1px;\n  width: 100%;\n  display: block;\n  background: #f9f9f9; }\n"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-dropdown.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var TagInputForm = (function () {
    function TagInputForm(renderer) {
        this.renderer = renderer;
        this.onSubmit = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onKeyup = new core_1.EventEmitter();
        this.onKeydown = new core_1.EventEmitter();
        this.validators = [];
        this.tabindex = undefined;
        this.disabled = false;
        this.inputTextChange = new core_1.EventEmitter();
        this.inputTextValue = '';
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            item: new forms_1.FormControl('', forms_1.Validators.compose(this.validators))
        });
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        get: function () {
            return this.form.get('item');
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.isInputFocused = function () {
        return document.activeElement === this.input.nativeElement;
    };
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    TagInputForm.prototype.hasErrors = function () {
        return this.form.dirty &&
            this.form.value.item &&
            this.form.invalid;
    };
    TagInputForm.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    };
    TagInputForm.prototype.blur = function () {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'blur');
    };
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        this.renderer.invokeElementMethod(input.parentElement, 'removeChild', [input]);
    };
    TagInputForm.prototype.onKeyDown = function ($event) {
        return this.onKeydown.emit($event);
    };
    TagInputForm.prototype.submit = function ($event) {
        this.onSubmit.emit($event);
    };
    return TagInputForm;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onSubmit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onBlur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onFocus", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onKeyup", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onKeydown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TagInputForm.prototype, "validators", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "inputId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "inputClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TagInputForm.prototype, "inputText", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "tabindex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputForm.prototype, "disabled", void 0);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", Object)
], TagInputForm.prototype, "input", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "inputTextChange", void 0);
TagInputForm = __decorate([
    core_1.Component({
        selector: 'tag-input-form',
        styles: [__webpack_require__(38)],
        template: __webpack_require__(32)
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], TagInputForm);
exports.TagInputForm = TagInputForm;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var accessor_1 = __webpack_require__(19);
var tag_input_form_component_1 = __webpack_require__(11);
var tag_input_dropdown_component_1 = __webpack_require__(7);
var tag_component_1 = __webpack_require__(9);
__webpack_require__(4);
var animations_1 = __webpack_require__(18);
var constants = __webpack_require__(20);
var listen_1 = __webpack_require__(21);
var CUSTOM_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TagInputComponent; }),
    multi: true
};
var TagInputComponent = (function (_super) {
    __extends(TagInputComponent, _super);
    function TagInputComponent(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.separatorKeys = [];
        _this.separatorKeyCodes = [];
        _this.placeholder = constants.PLACEHOLDER;
        _this.secondaryPlaceholder = constants.SECONDARY_PLACEHOLDER;
        _this.transform = function (item) { return item; };
        _this.validators = [];
        _this.onlyFromAutocomplete = false;
        _this.errorMessages = {};
        _this.onTextChangeDebounce = 250;
        _this.pasteSplitPattern = ',';
        _this.blinkIfDupe = true;
        _this.removable = true;
        _this.editable = undefined;
        _this.allowDupes = false;
        _this.modelAsStrings = false;
        _this.trimTags = true;
        _this.ripple = true;
        _this.tabindex = undefined;
        _this.disabled = undefined;
        _this.onAdd = new core_1.EventEmitter();
        _this.onRemove = new core_1.EventEmitter();
        _this.onSelect = new core_1.EventEmitter();
        _this.onFocus = new core_1.EventEmitter();
        _this.onBlur = new core_1.EventEmitter();
        _this.onTextChange = new core_1.EventEmitter();
        _this.onPaste = new core_1.EventEmitter();
        _this.onValidationError = new core_1.EventEmitter();
        _this.onTagEdited = new core_1.EventEmitter();
        _this.isLoading = false;
        _this.listeners = (_a = {},
            _a[constants.KEYDOWN] = [],
            _a[constants.KEYUP] = [],
            _a.change = [],
            _a);
        _this.inputTextChange = new core_1.EventEmitter();
        _this.inputTextValue = '';
        return _this;
        var _a;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        get: function () {
            return this.tabindex !== undefined ? '-1' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
            this.selectedTag = undefined;
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
    };
    TagInputComponent.prototype.addItem = function (isFromAutocomplete, item) {
        if (isFromAutocomplete === void 0) { isFromAutocomplete = false; }
        if (item === void 0) { item = this.formValue; }
        var display = this.getItemDisplay(item);
        var inputValue = this.setInputValue(display);
        var isFormInvalid = !this.inputForm.form.valid || !inputValue;
        if (isFormInvalid) {
            return;
        }
        var tag = this.createTag(isFromAutocomplete ? item : inputValue);
        var isValid = this.isTagValid(tag, isFromAutocomplete);
        if (isValid) {
            this.appendNewTag(tag);
            this.onAdd.emit(tag);
        }
        else {
            this.onValidationError.emit(tag);
        }
        this.setInputValue('');
        this.focus(true, false);
    };
    TagInputComponent.prototype.isTagValid = function (tag, isFromAutocomplete) {
        var _this = this;
        if (isFromAutocomplete === void 0) { isFromAutocomplete = false; }
        var selectedItem = this.dropdown ? this.dropdown.selectedItem : undefined;
        if (selectedItem && !isFromAutocomplete) {
            return;
        }
        var dupe = this.findDupe(tag, isFromAutocomplete);
        var hasDupe = !!dupe && dupe !== undefined;
        if (!this.allowDupes && hasDupe && this.blinkIfDupe) {
            var item = this.tags.find(function (_tag) {
                return _this.getItemValue(_tag.model) === _this.getItemValue(dupe);
            });
            if (!!item) {
                item.blink();
            }
        }
        var fromAutocomplete = isFromAutocomplete && this.onlyFromAutocomplete;
        var assertions = [
            !hasDupe || this.allowDupes === true,
            this.maxItemsReached === false,
            ((fromAutocomplete) || this.onlyFromAutocomplete === false)
        ];
        return assertions.filter(function (item) { return item; }).length === assertions.length;
    };
    TagInputComponent.prototype.appendNewTag = function (tag) {
        var newTag = this.modelAsStrings ? tag[this.identifyBy] : tag;
        this.items = this.items.concat([newTag]);
    };
    TagInputComponent.prototype.createTag = function (model) {
        var trim = function (val, key) {
            return typeof val === 'string' ? val.trim() : val[key];
        };
        return __assign({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[this.displayBy] = this.trimTags ? trim(model, this.displayBy) : model, _a[this.identifyBy] = this.trimTags ? trim(model, this.identifyBy) : model, _a));
        var _a;
    };
    TagInputComponent.prototype.selectItem = function (item) {
        if (this.readonly || !item) {
            return;
        }
        this.selectedTag = item;
        this.onSelect.emit(item);
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        switch (constants.KEY_PRESS_ACTIONS[key]) {
            case constants.ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    this.removeItem(this.selectedTag, this.items.indexOf(this.selectedTag));
                }
                break;
            case constants.ACTIONS_KEYS.SWITCH_PREV:
                this.switchPrev(data.model);
                break;
            case constants.ACTIONS_KEYS.SWITCH_NEXT:
                this.switchNext(data.model);
                break;
            case constants.ACTIONS_KEYS.TAB:
                this.switchNext(data.model);
                break;
            default:
                return;
        }
        event.preventDefault();
    };
    TagInputComponent.prototype.setInputValue = function (value) {
        var item = value ? this.transform(value) : '';
        var control = this.getControl();
        control.setValue(item);
        return item;
    };
    TagInputComponent.prototype.getControl = function () {
        return this.inputForm.value;
    };
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.readonly) {
            return;
        }
        this.selectedTag = undefined;
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
        if (displayAutocomplete && this.dropdown) {
            this.dropdown.show();
        }
    };
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ? this.dropdown.templates.first : undefined;
        return template && template !== menuTemplate;
    };
    TagInputComponent.prototype.switchNext = function (item) {
        if (this.tags.last.model === item) {
            this.focus(true);
            return;
        }
        var tags = this.tags.toArray();
        var tagIndex = tags.findIndex(function (tag) { return tag.model === item; });
        var tag = tags[tagIndex + 1];
        tag.select.call(tag);
    };
    TagInputComponent.prototype.switchPrev = function (item) {
        if (this.tags.first.model !== item) {
            var tags = this.tags.toArray();
            var tagIndex = tags.findIndex(function (tag) { return tag.model === item; });
            var tag = tags[tagIndex - 1];
            tag.select.call(tag);
        }
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined && this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        get: function () {
            return this.inputForm.value.value;
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.ngOnInit = function () {
        var maxItemsReached = this.maxItems !== undefined && this.items && this.items.length > this.maxItems;
        if (maxItemsReached) {
            this.maxItems = this.items.length;
            console.warn(constants.MAX_ITEMS_WARNING);
        }
    };
    TagInputComponent.prototype.ngAfterViewInit = function () {
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        listen_1.default.call(this, constants.KEYDOWN, function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            if (hasKeyCode || hasKey) {
                $event.preventDefault();
                _this.addItem();
            }
        }, useSeparatorKeys);
    };
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        listen_1.default.call(this, constants.KEYDOWN, function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        });
    };
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue === '') {
                event.preventDefault();
            }
        });
    };
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var input = this.inputForm.input.nativeElement;
        this.renderer.listen(input, 'paste', this.onPasteCallback.bind(this));
    };
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form.valueChanges
            .debounceTime(this.onTextChangeDebounce)
            .subscribe(function () { return _this.onTextChange.emit(_this.formValue); });
    };
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        this.inputForm
            .onBlur
            .filter(function () { return !(_this.dropdown && _this.dropdown.isVisible); })
            .subscribe(function () {
            if (_this.addOnBlur) {
                _this.addItem();
            }
            _this.setInputValue('');
        });
    };
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        return this.items.find(function (item) { return _this.getItemValue(item) === tag[identifyBy]; });
    };
    TagInputComponent.prototype.trackBy = function (item) {
        return item[this.identifyBy];
    };
    TagInputComponent.prototype.onPasteCallback = function (data) {
        var _this = this;
        var text = data.clipboardData.getData('text/plain');
        text.split(this.pasteSplitPattern)
            .map(function (item) { return _this.createTag(item); })
            .forEach(function (item) { return _this.addItem(false, item); });
        this.onPaste.emit(text);
        setTimeout(function () { return _this.setInputValue(''); }, 0);
    };
    return TagInputComponent;
}(accessor_1.TagInputAccessor));
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "separatorKeys", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "separatorKeyCodes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TagInputComponent.prototype, "maxItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TagInputComponent.prototype, "transform", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "validators", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "errorMessages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "theme", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "inputId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "inputClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clearOnBlur", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "hideForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "addOnBlur", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "addOnPaste", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "pasteSplitPattern", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "blinkIfDupe", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "removable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "editable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "allowDupes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "modelAsStrings", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "trimTags", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TagInputComponent.prototype, "inputText", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "ripple", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "tabindex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onAdd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onRemove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onFocus", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onBlur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTextChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onPaste", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onValidationError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTagEdited", void 0);
__decorate([
    core_1.ContentChild(tag_input_dropdown_component_1.TagInputDropdown),
    __metadata("design:type", tag_input_dropdown_component_1.TagInputDropdown)
], TagInputComponent.prototype, "dropdown", void 0);
__decorate([
    core_1.ContentChildren(core_1.TemplateRef, { descendants: false }),
    __metadata("design:type", core_1.QueryList)
], TagInputComponent.prototype, "templates", void 0);
__decorate([
    core_1.ViewChild(tag_input_form_component_1.TagInputForm),
    __metadata("design:type", tag_input_form_component_1.TagInputForm)
], TagInputComponent.prototype, "inputForm", void 0);
__decorate([
    core_1.ViewChildren(tag_component_1.TagComponent),
    __metadata("design:type", core_1.QueryList)
], TagInputComponent.prototype, "tags", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputComponent.prototype, "inputTextChange", void 0);
__decorate([
    core_1.HostBinding('attr.tabindex'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TagInputComponent.prototype, "tabindexAttr", null);
TagInputComponent = __decorate([
    core_1.Component({
        selector: 'tag-input',
        providers: [CUSTOM_ACCESSOR],
        styles: [__webpack_require__(39)],
        template: __webpack_require__(33),
        animations: animations_1.animations
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], TagInputComponent);
exports.TagInputComponent = TagInputComponent;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(22));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(12));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe = __decorate([
    core_1.Pipe({
        name: 'highlight'
    })
], HighlightPipe);
exports.HighlightPipe = HighlightPipe;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
exports.animations = [
    core_1.trigger('flyInOut', [
        core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
        core_1.transition(':enter', [
            core_1.animate(250, core_1.keyframes([
                core_1.style({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                core_1.style({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                core_1.style({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                core_1.style({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                core_1.style({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        core_1.transition(':leave', [
            core_1.animate(150, core_1.keyframes([
                core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                core_1.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
function isObject(obj) {
    return obj === Object(obj);
}
exports.isObject = isObject;
var TagInputAccessor = (function () {
    function TagInputAccessor() {
        this._items = [];
        this.displayBy = 'display';
        this.identifyBy = 'value';
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    ;
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    TagInputAccessor.prototype.getItemValue = function (item) {
        return isObject(item) ? item[this.identifyBy] : item;
    };
    TagInputAccessor.prototype.getItemDisplay = function (item) {
        return isObject(item) ? item[this.displayBy] : item;
    };
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputAccessor.prototype, "displayBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputAccessor.prototype, "identifyBy", void 0);
exports.TagInputAccessor = TagInputAccessor;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PLACEHOLDER = '+ Tag';
exports.SECONDARY_PLACEHOLDER = 'Enter a new tag';
exports.KEYDOWN = 'keydown';
exports.KEYUP = 'keyup';
exports.FOCUS = 'focus';
exports.MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
exports.ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
exports.KEY_PRESS_ACTIONS = {
    8: exports.ACTIONS_KEYS.DELETE,
    37: exports.ACTIONS_KEYS.SWITCH_PREV,
    39: exports.ACTIONS_KEYS.SWITCH_NEXT,
    9: exports.ACTIONS_KEYS.TAB
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    if (!condition) {
        return;
    }
    this.listeners[listenerType].push(action);
}
exports.default = listen;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var DeleteIconComponent = (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent = __decorate([
    core_1.Component({
        selector: 'delete-icon',
        template: __webpack_require__(31),
        styles: [__webpack_require__(37)]
    })
], DeleteIconComponent);
exports.DeleteIconComponent = DeleteIconComponent;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var common_1 = __webpack_require__(2);
var ng2_material_dropdown_1 = __webpack_require__(10);
var icon_1 = __webpack_require__(14);
exports.DeleteIconComponent = icon_1.DeleteIconComponent;
var tag_input_form_1 = __webpack_require__(17);
exports.TagInputForm = tag_input_form_1.TagInputForm;
var components_1 = __webpack_require__(15);
exports.TagInputComponent = components_1.TagInputComponent;
var tag_input_dropdown_component_1 = __webpack_require__(7);
exports.TagInputDropdown = tag_input_dropdown_component_1.TagInputDropdown;
var highlight_pipe_1 = __webpack_require__(16);
var tag_component_1 = __webpack_require__(9);
exports.TagComponent = tag_component_1.TagComponent;
var tag_ripple_component_1 = __webpack_require__(8);
exports.TagRipple = tag_ripple_component_1.TagRipple;
var TagInputModule = (function () {
    function TagInputModule() {
    }
    return TagInputModule;
}());
TagInputModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            ng2_material_dropdown_1.Ng2DropdownModule
        ],
        declarations: [
            components_1.TagInputComponent,
            icon_1.DeleteIconComponent,
            tag_input_form_1.TagInputForm,
            tag_component_1.TagComponent,
            highlight_pipe_1.HighlightPipe,
            tag_input_dropdown_component_1.TagInputDropdown,
            tag_ripple_component_1.TagRipple
        ],
        exports: [
            components_1.TagInputComponent,
            icon_1.DeleteIconComponent,
            tag_input_form_1.TagInputForm,
            tag_component_1.TagComponent,
            highlight_pipe_1.HighlightPipe,
            tag_input_dropdown_component_1.TagInputDropdown,
            tag_ripple_component_1.TagRipple
        ]
    })
], TagInputModule);
exports.TagInputModule = TagInputModule;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(24)
var ieee754 = __webpack_require__(35)
var isArray = __webpack_require__(36)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.15s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n:host(delete-icon) {\n  width: 16px;\n  height: 16px;\n  transition: all 0.15s;\n  display: inline-block; }\n  :host(delete-icon) path {\n    fill: #444; }\n  :host(delete-icon) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host(delete-icon):hover {\n  transform: scale(1.5) translateY(-3px); }\n\n:host-context(.dark) path {\n  fill: #fff; }\n\n:host-context(.dark) svg {\n  vertical-align: bottom;\n  height: 34px; }\n\n:host-context(.minimal) path {\n  fill: #444; }\n\n:host-context(.minimal) svg {\n  vertical-align: bottom;\n  height: 34px; }\n\n:host-context(.bootstrap) path {\n  fill: #fff; }\n\n:host-context(.bootstrap) svg {\n  vertical-align: bottom;\n  height: 34px; }\n\n:host-context(tag:focus) path,\n:host-context(tag:active) path {\n  fill: #fff; }\n\n:host-context(.dark tag:focus) path,\n:host-context(.dark tag:active) path {\n  fill: #000; }\n\n:host-context(.minimal tag:focus) path,\n:host-context(.minimal tag:active) path {\n  fill: #000; }\n\n:host-context(.bootstrap tag:focus) path,\n:host-context(.bootstrap tag:active) path {\n  fill: #fff; }\n\n:host-context(.bootstrap3-info) {\n  height: inherit; }\n  :host-context(.bootstrap3-info) path {\n    fill: #fff; }\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.15s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n.ng2-tag-input__text-input {\n  display: inline;\n  vertical-align: middle;\n  border: none;\n  padding: 0 0.5rem;\n  height: 38px;\n  font-size: 1em;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n  .ng2-tag-input__text-input:focus {\n    outline: 0; }\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.15s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n.progress-bar, .progress-bar:before {\n  height: 2px;\n  width: 100%;\n  margin: 0; }\n\n.progress-bar {\n  background-color: #2196F3;\n  display: flex;\n  position: absolute;\n  bottom: 0; }\n\n.progress-bar:before {\n  background-color: #82c4f8;\n  content: '';\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%; }\n  50% {\n    margin-left: 25%;\n    margin-right: 0; }\n  100% {\n    margin-left: 100%;\n    margin-right: 0; } }\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%; }\n  50% {\n    margin-left: 25%;\n    margin-right: 0; }\n  100% {\n    margin-left: 100%;\n    margin-right: 0; } }\n\ntag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 1em;\n  letter-spacing: 0.05rem;\n  color: #444;\n  border-radius: 16px;\n  transition: all 0.3s;\n  margin: 0.1rem 0.3rem 0.1rem 0;\n  padding: 0.08rem 0.45rem;\n  height: 32px;\n  line-height: 34px;\n  background: #efefef;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  tag:not(.readonly):not(.tag--editing):focus {\n    background: #2196F3;\n    color: #fff; }\n  tag:not(.readonly):not(.tag--editing):active {\n    background: #0d8aee;\n    color: #fff; }\n  tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #e2e2e2;\n    color: initial; }\n  tag.readonly {\n    cursor: default; }\n  tag.readonly:focus, tag:focus {\n    outline: 0; }\n  tag.tag--editing {\n    background-color: #fff;\n    cursor: text; }\n\n.minimal tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-radius: 0;\n  background: #f9f9f9;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .minimal tag:not(.readonly):not(.tag--editing):focus {\n    background: #d0d0d0;\n    color: initial; }\n  .minimal tag:not(.readonly):not(.tag--editing):active {\n    background: #d0d0d0;\n    color: initial; }\n  .minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #ececec; }\n  .minimal tag.readonly {\n    cursor: default; }\n  .minimal tag.readonly:focus, .minimal tag:focus {\n    outline: 0; }\n  .minimal tag.tag--editing {\n    cursor: text; }\n\n.dark tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 3px;\n  background: #444;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .dark tag:not(.readonly):not(.tag--editing):focus {\n    background: #efefef;\n    color: #444; }\n  .dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #2b2b2b;\n    color: #f9f9f9; }\n  .dark tag.readonly {\n    cursor: default; }\n  .dark tag.readonly:focus, .dark tag:focus {\n    outline: 0; }\n  .dark tag.tag--editing {\n    cursor: text; }\n\n.bootstrap tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 0.25rem;\n  background: #0275d8;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .bootstrap tag:not(.readonly):not(.tag--editing):focus {\n    background: #025aa5; }\n  .bootstrap tag:not(.readonly):not(.tag--editing):active {\n    background: #025aa5; }\n  .bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #0267bf;\n    color: #f9f9f9; }\n  .bootstrap tag.readonly {\n    cursor: default; }\n  .bootstrap tag.readonly:focus, .bootstrap tag:focus {\n    outline: 0; }\n  .bootstrap tag.tag--editing {\n    cursor: text; }\n\n.bootstrap3-info tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 95%;\n  color: #fff;\n  border-radius: 0.25em;\n  background: #5bc0de;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  padding: .25em .6em;\n  text-align: center;\n  white-space: nowrap; }\n  .bootstrap3-info tag:not(.readonly):not(.tag--editing):focus {\n    background: #28a1c5; }\n  .bootstrap3-info tag:not(.readonly):not(.tag--editing):active {\n    background: #28a1c5; }\n  .bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #46b8da;\n    color: #fff; }\n  .bootstrap3-info tag.readonly {\n    cursor: default; }\n  .bootstrap3-info tag.readonly:focus, .bootstrap3-info tag:focus {\n    outline: 0; }\n  .bootstrap3-info tag.tag--editing {\n    cursor: text; }\n", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ":host,\n:host > div,\n:host > div:focus {\n  outline: 0;\n  overflow: hidden;\n  transition: opacity 1s;\n  z-index: 1; }\n\n:host.blink {\n  -webkit-animation: blink 0.3s normal forwards ease-in-out;\n  animation: blink 0.3s normal forwards ease-in-out; }\n\n@keyframes blink {\n  0% {\n    opacity: 0.3; } }\n\n:host .disabled {\n  cursor: not-allowed; }\n\n:host [contenteditable='true'] {\n  outline: 0;\n  user-select: none; }\n\n.inline {\n  display: inline; }\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<ng2-dropdown>\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<!-- form -->\n<form (submit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"0\"\n\n           [(ngModel)]=\"inputText\"\n           [formControlName]=\"'item'\"\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyup.emit($event)\"\n    />\n</form>\n";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n     [class.ng2-tag-input--disabled]=\"disabled\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"removeItem(item, i)\"\n             (onKeyDown)=\"handleKeydown($event, item)\"\n             (onTagEdited)=\"onTagEdited.emit(item)\"\n\n             [disabled]=\"disabled\"\n             [@flyInOut]=\"'in'\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [attr.tabindex]=\"readonly ? -1 : 0\"\n             [class.readonly]=\"readonly\"\n             [readonly]=\"readonly\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"addItem()\"\n            (onBlur)=\"blur()\"\n            (onFocus)=\"focus(false, dropdown ? dropdown.showDropdownIfEmpty : false)\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disabled\"\n            [validators]=\"validators\"\n            [hidden]=\"readonly || maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isLoading\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of inputForm.getErrorMessages(errorMessages)\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"select($event)\"\n     (dblclick)=\"editable ? toggleEditMode($event) : undefined\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editModeActivated\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editModeActivated\"\n             class=\"inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editModeActivated ? $event.stopPropagation() : undefined\"\n             (blur)=\"toggleEditMode()\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove()\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible()\">\n</tag-ripple>\n";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(26);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(27);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(28);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(29);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })
/******/ ]);
});
//# sourceMappingURL=ng2-tag-input.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(963).Buffer))

/***/ }),

/***/ 1013:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Activity Reports</div>\n<!-- START row-->\n<div class=\"row\">\n    <div class=\"col-lg-4\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"panel-body\">\n                <div class=\"text-right text-muted\">\n                    <em class=\"fa fa-retweet fa-2x\"></em>\n                </div>\n                <h3 class=\"mt0\">99.999</h3>\n                <p class=\"text-muted\">Repeat customers</p>\n                <div class=\"progress progress-striped progress-xs\">\n                    <div class=\"progress-bar progress-bar-warning progress-60\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"70\">\n                        <span class=\"sr-only\">60% Complete</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-4\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"panel-body\">\n                <div class=\"text-right text-muted\">\n                    <em class=\"fa fa-angle-double-left fa-2x\"></em>\n                </div>\n                <h3 class=\"mt0\">300</h3>\n                <p class=\"text-muted\">Fulfilled orders MTD</p>\n                <div class=\"progress progress-striped progress-xs\">\n                    <div class=\"progress-bar progress-bar-green progress-80\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">80% Complete</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-4\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"panel-body\">\n                <div class=\"text-right text-muted\">\n                    <em class=\"fa fa-exclamation fa-2x\"></em>\n                </div>\n                <h3 class=\"mt0\">1000</h3>\n                <p class=\"text-muted\">Abandoned carts</p>\n                <div class=\"progress progress-striped progress-xs\">\n                    <div class=\"progress-bar progress-bar-info progress-40\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">40% Complete</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n</div>\n<!-- END row-->\n<!-- START row-->\n<div class=\"row\">\n    <div class=\"col-lg-4\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-6 bb br\">\n                    <div class=\"row row-table row-flush\">\n                        <div class=\"col-xs-4 text-center text-info\">\n                            <em class=\"fa fa-users fa-2x\"></em>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <div class=\"panel-body text-center\">\n                                <h4 class=\"mt0\">3k</h4>\n                                <p class=\"mb0 text-muted\">VISITORS <small>/DAY</small></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-6 bb\">\n                    <div class=\"row row-table row-flush\">\n                        <div class=\"col-xs-4 text-center text-success\">\n                            <em class=\"fa fa-sign-in fa-2x\"></em>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <div class=\"panel-body text-center\">\n                                <h4 class=\"mt0\">2K</h4>\n                                <p class=\"mb0 text-muted\">Logins <small>/DAY</small></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-6 br\">\n                    <div class=\"row row-table row-flush\">\n                        <div class=\"col-xs-4 text-center text-inverse\">\n                            <em class=\"fa fa-registered fa-2x\"></em>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <div class=\"panel-body text-center\">\n                                <h4 class=\"mt0\">1K</h4>\n                                <p class=\"mb0 text-muted\">Registered <small>/DAY</small></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"row row-table row-flush\">\n                        <div class=\"col-xs-4 text-center text-danger\">\n                            <em class=\"fa fa-exclamation-triangle fa-2x\"></em>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <div class=\"panel-body text-center\">\n                                <h4 class=\"mt0\">500</h4>\n                                <p class=\"mb0 text-muted\">Match failures</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-6 bb br\">\n                    <div class=\"row row-table row-flush\">\n                        <div class=\"col-xs-4 text-center text-info\">\n                            <!-- Bar chart-->\n                            <div [sparkline]=\"sparkOptions1\"  values=\"5,9,4,1,3,4,7,5\"></div>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <div class=\"panel-body text-center\">\n                                <h4 class=\"mt0\">10k</h4>\n                                <p class=\"mb0 text-muted\">ORDERS</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-6 bb\">\n                    <div class=\"row row-table row-flush\">\n                        <div class=\"col-xs-4 text-center text-danger\">\n                            <!-- Bar chart-->\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,2,3,4,5,6,7,8,9\"></div>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <div class=\"panel-body text-center\">\n                                <h4 class=\"mt0\">1K</h4>\n                                <p class=\"mb0 text-muted\">RETURNS</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-6 br\">\n                    <div class=\"row row-table row-flush\">\n                        <div class=\"col-xs-4 text-center text-inverse\">\n                            <!-- Bar chart-->\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,0,4,9,5,7,8,4,7\"></div>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <div class=\"panel-body text-center\">\n                                <h4 class=\"mt0\">2K</h4>\n                                <p class=\"mb0 text-muted\">IN CART</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"row row-table row-flush\">\n                        <div class=\"col-xs-4 text-center text-success\">\n                            <!-- Bar chart-->\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,5,2,2,8,4,4,8\"></div>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <div class=\"panel-body text-center\">\n                                <h4 class=\"mt0\">9k</h4>\n                                <p class=\"mb0 text-muted\">DELIVERED</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-8\">\n        <h4>Bar Chart</h4>\n        <div>\n           <canvas baseChart [chartType]=\"'bar'\" [options]=\"barOptions\" [datasets]=\"barData.datasets\" [colors]=\"barColors\" [labels]=\"barData.labels\" [legend]=\"false\" height=\"120\"></canvas>\n        </div>\n     </div>\n</div>\n<!-- END row-->\n\n\n"

/***/ }),

/***/ 1014:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\n  Dashboard\n  <small>{{ 'dashboard.WELCOME' | translate }} !</small>\n</div>\n<!-- START widgets box-->\n<div class=\"row\">\n  <div class=\"col-lg-3 col-sm-6\">\n      <!-- START widget-->\n      <div class=\"panel widget bg-primary\">\n          <div class=\"row row-table\">\n              <div class=\"col-xs-4 text-center bg-primary-dark pv-lg\">\n                  <em class=\"fa fa-truck fa-3x\"></em>\n              </div>\n              <div class=\"col-xs-8 pv-lg\">\n                  <div class=\"h2 mt0\">1700\n                    <!-- <small>total</small> -->\n                  </div>\n                  <div class=\"text-uppercase\">Orders</div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-lg-3 col-sm-6\">\n      <!-- START widget-->\n      <div class=\"panel widget bg-purple\">\n          <div class=\"row row-table\">\n              <div class=\"col-xs-4 text-center bg-purple-dark pv-lg\">\n                  <em class=\"fa fa-user fa-3x\"></em>\n              </div>\n              <div class=\"col-xs-8 pv-lg\">\n                  <div class=\"h2 mt0\">700\n                  </div>\n                  <div class=\"text-uppercase\">Users</div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\n      <!-- START widget-->\n      <div class=\"panel widget bg-green\">\n          <div class=\"row row-table\">\n              <div class=\"col-xs-4 text-center bg-green-dark pv-lg\">\n                  <em class=\"fa fa-eye fa-3x\"></em>\n              </div>\n              <div class=\"col-xs-8 pv-lg\">\n                  <div class=\"h2 mt0\">5000</div>\n                  <div class=\"text-uppercase\">Visitors</div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\n      <!-- START date widget-->\n      <div class=\"panel widget bg-green\">\n        <div class=\"row row-table\">\n            <div class=\"col-xs-4 text-center bg-green-dark pv-lg\">\n                <em class=\"fa fa-money fa-3x\"></em>\n            </div>\n            <div class=\"col-xs-8 pv-lg\">\n                <div class=\"h2 mt0\">$ 90000</div>\n                <div class=\"text-uppercase\">Sales</div>\n            </div>\n        </div>\n    </div>\n      <!-- END date widget    -->\n  </div>\n</div>\n<!-- END widgets box-->\n<div class=\"row\">\n  <!-- START dashboard main content-->\n  <div class=\"col-lg-9\">\n      <!-- START chart-->\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <!-- START widget-->\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                      <div class=\"panel-title\">Inbound visitor statistics</div>\n                  </div>\n                  <div class=\"panel-body\">\n                      <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" height=\"260\"></div>\n                  </div>\n              </div>\n              <!-- END widget-->\n          </div>\n      </div>\n      <!-- END chart-->\n      \n      <div class=\"row\">\n          <div class=\"col-lg-4\">\n              <!-- START widget-->\n              <div class=\"panel widget\">\n                  <div class=\"panel-body\">\n                      <div class=\"clearfix\">\n                          <h3 class=\"pull-left text-muted mt0\">300</h3>\n                          <em class=\"pull-right text-muted fa fa-shopping-cart  fa-2x\"></em>\n                      </div>\n                      <div class=\"pv-lg\" [sparkline]=\"sparkOptions2\" values=\"1,3,4,7,5,9,4,4,7,5,9,6,4\"></div>\n                      <p>\n                          <small class=\"text-muted\">Cart to bag</small>\n                      </p>\n                      <progressbar class=\"progress-striped progress-xs\" value=\"80\" type=\"info\">80%</progressbar>\n                  </div>\n              </div>\n              <!-- END widget-->\n          </div>\n          <div class=\"col-lg-8\">\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                      <!-- <div class=\"pull-right label label-danger\">5</div>\n                      <div class=\"pull-right label label-success\">12</div> -->\n                      <div class=\"panel-title\">Top selling products</div>\n                  </div>\n                  <!-- START list group-->\n                  <scrollable class=\"list-group\" height=\"180\">\n                      <!-- START list group item-->\n                      <a class=\"list-group-item\" href=\"\">\n                          <div class=\"media-box\">\n                              <div class=\"pull-left\">\n                                  <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\n                              </div>\n                              <div class=\"media-box-body clearfix\">\n                                  <small class=\"pull-right\">200</small>\n                                  <strong class=\"media-box-heading text-primary\">\n                            <span class=\"text-left\"></span>Product 1</strong>\n                                  <p class=\"mb-sm\">\n                                      <small>some description about the product</small>\n                                  </p>\n                              </div>\n                          </div>\n                      </a>\n                      <!-- END list group item-->\n                      <!-- START list group item-->\n                      <a class=\"list-group-item\" href=\"\">\n                        <div class=\"media-box\">\n                            <div class=\"pull-left\">\n                                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product8.png\" alt=\"Image\" />\n                            </div>\n                            <div class=\"media-box-body clearfix\">\n                                <small class=\"pull-right\">180</small>\n                                <strong class=\"media-box-heading text-primary\">\n                          <span class=\"text-left\"></span>Product 2</strong>\n                                <p class=\"mb-sm\">\n                                    <small>some description about the product</small>\n                                </p>\n                            </div>\n                        </div>\n                    </a>\n                    <!-- END list group item-->\n                      <!-- START list group item-->\n                      <a class=\"list-group-item\" href=\"\">\n                        <div class=\"media-box\">\n                            <div class=\"pull-left\">\n                                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product9.png\" alt=\"Image\" />\n                            </div>\n                            <div class=\"media-box-body clearfix\">\n                                <small class=\"pull-right\">150</small>\n                                <strong class=\"media-box-heading text-primary\">\n                          <span class=\"text-left\"></span>Product 3</strong>\n                                <p class=\"mb-sm\">\n                                    <small>some description about the product</small>\n                                </p>\n                            </div>\n                        </div>\n                    </a>\n                    <!-- END list group item-->\n                      <!-- START list group item-->\n                      <a class=\"list-group-item\" href=\"\">\n                        <div class=\"media-box\">\n                            <div class=\"pull-left\">\n                                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product10.png\" alt=\"Image\" />\n                            </div>\n                            <div class=\"media-box-body clearfix\">\n                                <small class=\"pull-right\">135</small>\n                                <strong class=\"media-box-heading text-primary\">\n                          <span class=\"text-left\"></span>Product 4</strong>\n                                <p class=\"mb-sm\">\n                                    <small>some description about the product</small>\n                                </p>\n                            </div>\n                        </div>\n                    </a>\n                    <!-- END list group item-->\n                      <!-- START list group item-->\n                      <a class=\"list-group-item\" href=\"\">\n                        <div class=\"media-box\">\n                            <div class=\"pull-left\">\n                                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\n                            </div>\n                            <div class=\"media-box-body clearfix\">\n                                <small class=\"pull-right\">111</small>\n                                <strong class=\"media-box-heading text-primary\">\n                          <span class=\"text-left\"></span>Product 5</strong>\n                                <p class=\"mb-sm\">\n                                    <small>some description about the product</small>\n                                </p>\n                            </div>\n                        </div>\n                    </a>\n                    <!-- END list group item-->                      \n                  </scrollable>\n                  <!-- END list group-->\n                  <!-- START panel footer-->\n                  <div class=\"panel-footer clearfix\">\n                      <div class=\"input-group\">\n                          <input class=\"form-control input-sm\" type=\"text\" placeholder=\"Search message ..\" />\n                          <span class=\"input-group-btn\">\n                      <button class=\"btn btn-default btn-sm\" type=\"submit\"><i class=\"fa fa-search\"></i>\n                      </button>\n                   </span>\n                      </div>\n                  </div>\n                  <!-- END panel-footer-->\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- END dashboard main content-->\n  <!-- START dashboard sidebar-->\n  <aside class=\"col-lg-3\">\n      <!-- START loader widget-->\n      <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n              <a class=\"text-muted pull-right\" href=\"\">\n                  <em class=\"fa fa-arrow-right\"></em>\n              </a>\n              <div class=\"text-info\">Average Monthly Orders</div>\n              <div class=\"text-center pv-xl\">\n                  <div class=\"easypie-chart easypie-chart-lg\" easypiechart [options]=\"pieOptions\" [percent]=\"easyPiePercent\">\n                      <span>{{easyPiePercent}}%</span>\n                  </div>\n              </div>\n              <div class=\"text-center\" [sparkline]=\"sparkOptions1\"  values=\"5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7\"></div>\n          </div>\n          <div class=\"panel-footer\">\n              <p class=\"text-muted\">\n                  <em class=\"fa fa-upload fa-fw\"></em>\n                  <span>This Month</span>\n                  <span class=\"text-dark\">300 orders</span>\n              </p>\n          </div>\n      </div>\n      <!-- END loader widget-->\n      <!-- START messages and activity-->\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n              <div class=\"panel-title\">Last orders</div>\n          </div>\n          <!-- START list group-->\n          <div class=\"list-group\">\n              \n              <!-- START list group item-->\n              <div class=\"list-group-item\">\n                  <div class=\"media-box\">\n                    <div class=\"pull-left\">\n                      <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\n                    </div>\n                    <div class=\"media-box-body clearfix\">\n                        <small class=\"text-muted pull-right ml\">15h</small>\n                        <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 1</a>\n                        </div>\n                        <p class=\"m0\">\n                            <small>On\n                        <em>10/08/2017 09:00 am</em>\n                    </small>\n                        </p>\n                    </div>\n                  </div>\n              </div>\n              <!-- END list group item-->\n              <!-- START list group item-->\n              <div class=\"list-group-item\">\n                <div class=\"media-box\">\n                  <div class=\"pull-left\">\n                    <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\n                  </div>\n                  <div class=\"media-box-body clearfix\">\n                      <small class=\"text-muted pull-right ml\">1D</small>\n                      <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 2</a>\n                      </div>\n                      <p class=\"m0\">\n                          <small>On\n                      <em>05/08/2017 09:00 am</em>\n                  </small>\n                      </p>\n                  </div>\n                </div>\n            </div>\n            <!-- END list group item-->\n            <!-- START list group item-->\n            <div class=\"list-group-item\">\n              <div class=\"media-box\">\n                <div class=\"pull-left\">\n                  <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\n                </div>\n                <div class=\"media-box-body clearfix\">\n                    <small class=\"text-muted pull-right ml\">15d</small>\n                    <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 3</a>\n                    </div>\n                    <p class=\"m0\">\n                        <small>On\n                    <em>2/7/2015 09:00 am</em>\n                </small>\n                    </p>\n                </div>\n              </div>\n          </div>\n          <!-- END list group item-->\n          <!-- START list group item-->\n          <div class=\"list-group-item\">\n            <div class=\"media-box\">\n              <div class=\"pull-left\">\n                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\n              </div>\n              <div class=\"media-box-body clearfix\">\n                  <small class=\"text-muted pull-right ml\">21d</small>\n                  <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 4</a>\n                  </div>\n                  <p class=\"m0\">\n                      <small>On\n                  <em>23/06/2017 09:00 am</em>\n              </small>\n                  </p>\n              </div>\n            </div>\n        </div>\n        <!-- END list group item-->\n        <!-- START list group item-->\n        <div class=\"list-group-item\">\n          <div class=\"media-box\">\n              <div class=\"pull-left\">\n                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\n              </div>\n              <div class=\"media-box-body clearfix\">\n                  <small class=\"text-muted pull-right ml\">45d</small>\n                  <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 5</a>\n                  </div>\n                  <p class=\"m0\">\n                      <small>On\n                 <em>10/05/2017 09:00 am</em>\n              </small>\n                  </p>\n              </div>\n          </div>\n      </div>\n      <!-- END list group item-->\n      \n          </div>\n          <!-- END list group-->\n          <!-- START panel footer-->\n          <div class=\"panel-footer clearfix\">\n              <a class=\"pull-left\" href=\"\">\n                  <small>Load more</small>\n              </a>\n          </div>\n          <!-- END panel-footer-->\n      </div>\n      <!-- END messages and activity-->\n  </aside>\n  <!-- END dashboard sidebar-->\n</div>\n"

/***/ }),

/***/ 1015:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"text-muted text-thin\">Documents Library</h4>\n  </div>\n  <hr>\n  <div class=\"panel-body\">\n    <form>\n      <div class=\"documents-upload form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4 class=\"text-muted text-thin\">Add your document</h4>\n            <h5 class=\"text-muted text-thin\">Select file : </h5>\n            <input filestyle=\"\" type=\"file\" data-button-text=\"Multiple\" data-class-button=\"btn btn-default\" data-class-input=\"form-control inline\"\n              nv-file-select=\"\" uploader=\"form.uploader\" multiple=\"\" class=\"form-control\" id=\"filestyle-0\" tabindex=\"-1\" style=\"position: absolute; clip: rect(0px 0px 0px 0px);\">\n            <div class=\"bootstrap-filestyle input-group\"><input type=\"text\" class=\"form-control \" placeholder=\"\" disabled=\"\"> <span class=\"group-span-filestyle input-group-btn\"\n                tabindex=\"0\"><label for=\"filestyle-0\" class=\"btn btn-default \"><span class=\"fa fa-paperclip\"></span>              <span class=\"buttonText\">Upload Multiple Documents</span></label>\n              </span>\n            </div><br><br>\n            <input filestyle=\"\" type=\"file\" data-button-text=\"Single\" data-class-button=\"btn btn-default\" data-classinput=\"form-control inline\"\n              nv-file-select=\"\" uploader=\"form.uploader\" class=\"form-control\" id=\"filestyle-1\" tabindex=\"-1\" style=\"position: absolute; clip: rect(0px 0px 0px 0px);\"\n              (change)=\"logoUploadBase64($event)\">\n            <div class=\"bootstrap-filestyle input-group\">\n              <input type=\"text\" class=\"form-control \" placeholder=\"\" disabled=\"\">\n              <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\">\n            <label for=\"filestyle-1\" class=\"btn btn-default \"><span class=\"fa fa-paperclip\"></span>\n              <span class=\"buttonText\">Upload Single Document</span>\n              </label>\n              </span>\n            </div>\n          </div>\n          <div class=\"col-md-6 preview\">\n            <!-- <input filestyle=\"\" type=\"file\" data-button-text=\"Multiple\" data-class-button=\"btn btn-default\" data-class-input=\"form-control inline\" nv-file-select=\"\" uploader=\"form.uploader\" multiple=\"\" class=\"form-control\" id=\"filestyle-0\" tabindex=\"-1\" style=\"position: absolute; clip: rect(0px 0px 0px 0px);\"><div class=\"bootstrap-filestyle input-group\"><input type=\"text\" class=\"form-control \" placeholder=\"\" disabled=\"\"> <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\"><label for=\"filestyle-0\" class=\"btn btn-default \"><span class=\"icon-span-filestyle glyphicon glyphicon-folder-open\"></span> <span class=\"buttonText\">Multiple</span></label></span></div><br><input filestyle=\"\" type=\"file\" data-button-text=\"Single\" data-class-button=\"btn btn-default\" data-classinput=\"form-control inline\" nv-file-select=\"\" uploader=\"form.uploader\" class=\"form-control\" id=\"filestyle-1\" tabindex=\"-1\" style=\"position: absolute; clip: rect(0px 0px 0px 0px);\"><div class=\"bootstrap-filestyle input-group\"><input type=\"text\" class=\"form-control \" placeholder=\"\" disabled=\"\"> <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\"><label for=\"filestyle-1\" class=\"btn btn-default \"><span class=\"icon-span-filestyle glyphicon glyphicon-folder-open\"></span> <span class=\"buttonText\">Single</span></label></span></div></div> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"productOrCatagory form-group\">\n        <h4 class=\"text-muted text-thin\">Add Product or Catagory</h4>\n        <input class=\"form-control\" type=\"text\">\n      </div>\n      <div class=\"keywwords form-group\">\n        <h4 class=\"text-muted text-thin\">Add your Keywords below</h4>\n        <tag-input theme='minimal' name=\"keywords\" [(ngModel)]=\"keywords\"></tag-input>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 1016:
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\">\n  <tab>\n    <ng-template tabHeading>\n      <h4 class=\"text-muted text-thin\">Products <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i></h4>\n    </ng-template>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Product 1</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #product1Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your product image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"product1Image\" (change)=\"product1ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='image1.src'>\n                  <label class=\"text-muted text-thin\">Image Preview</label>\n                  <img src=\"{{image1.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"productName\" class=\"text-muted text-thin\">Product name</label>\n                  <input type=\"text\" name=\"product1name\" class=\"form-control\" [(ngModel)] = 'product1Data.product1name' #product1name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"productDesc\" class=\"text-muted text-thin\">Product description</label>\n                  <!-- <input type=\"text\" name=\"product1desc\" class=\"form-control\"> -->\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"product1desc\" [(ngModel)] = 'product1Data.product1desc' #product1desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!product1Form.form.valid\"  (click)='saveProduct1Data(product1Data); product1Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h4 class=\"text-muted text-thin\">Product 2</h4>\n            </div>\n            <hr>\n            <div class=\"panel-body\">\n              <form novalidate #product2Form = 'ngForm'>\n                <div class=\"form-group\">\n                <label class=\"text-muted text-thin\">Select your product image</label>\n                <label for=\"image-input\" class=\"file-upload\">\n                    <button class=\"btn btn-default btn-block\">Upload Image</button>\n                    <input  type=\"file\" name=\"product2Image\" (change)=\"product2ImageUpload($event)\" >\n                </label>\n              </div>\n                <div class=\"result\" *ngIf='image2.src'>\n                    <label class=\"text-muted text-thin\">Image Preview</label>\n                    <img src=\"{{image2.src}}\" width=\"200px\" height=\"200px\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"productName\" class=\"text-muted text-thin\">Product name</label>\n                    <input type=\"text\" name=\"product2name\" class=\"form-control\" [(ngModel)] = 'product2Data.product2name' #product2name = 'ngModel'>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"productDesc\" class=\"text-muted text-thin\">Product description</label>\n                    <!-- <input type=\"text\" name=\"product2desc\" class=\"form-control\"> -->\n                    <textarea class=\"form-control\" rows=\"3\"  name=\"product2desc\" [(ngModel)] = 'product2Data.product2desc' #product2desc = 'ngModel'></textarea>\n                </div>\n                <button class=\"btn btn-primary pull-right\" [disabled]=\"!product2Form.form.valid\"  (click)='saveProduct2Data(product2Data); product2Form.reset()'>Save</button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"text-muted text-thin\">Product 3</h4>\n              </div>\n              <hr>\n              <div class=\"panel-body\">\n                <form novalidate #product3Form = 'ngForm'>\n                  <div class=\"form-group\">\n                  <label class=\"text-muted text-thin\">Select your product image</label>\n                  <label for=\"image-input\" class=\"file-upload\">\n                      <button class=\"btn btn-default btn-block\">Upload Image</button>\n                      <input  type=\"file\" name=\"product3Image\" (change)=\"product3ImageUpload($event)\" >\n                  </label>\n                </div>\n                  <div class=\"result\" *ngIf='image3.src'>\n                      <label class=\"text-muted text-thin\">Image Preview</label>\n                      <img src=\"{{image3.src}}\" width=\"200px\" height=\"200px\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"productName\" class=\"text-muted text-thin\">Product name</label>\n                      <input type=\"text\" name=\"product3name\" class=\"form-control\" [(ngModel)] = 'product3Data.product3name' #product3name = 'ngModel'>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"productDesc\" class=\"text-muted text-thin\">Product description</label>\n                      <!-- <input type=\"text\" name=\"product3desc\" class=\"form-control\"> -->\n                      <textarea class=\"form-control\" rows=\"3\"  name=\"product3desc\" [(ngModel)] = 'product3Data.product3desc' #product3desc = 'ngModel'></textarea>\n                  </div>\n                  <button class=\"btn btn-primary pull-right\" [disabled]=\"!product3Form.form.valid\"  (click)='saveProduct3Data(product3Data); product3Form.reset()'>Save</button>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"text-muted text-thin\">Product 4</h4>\n                </div>\n                <hr>\n                <div class=\"panel-body\">\n                  <form novalidate #product4Form = 'ngForm'>\n                    <div class=\"form-group\">\n                    <label class=\"text-muted text-thin\">Select your product image</label>\n                    <label for=\"image-input\" class=\"file-upload\">\n                        <button class=\"btn btn-default btn-block\">Upload Image</button>\n                        <input  type=\"file\" name=\"product4Image\" (change)=\"product4ImageUpload($event)\" >\n                    </label>\n                  </div>\n                    <div class=\"result\" *ngIf='image4.src'>\n                        <label class=\"text-muted text-thin\">Image Preview</label>\n                        <img src=\"{{image4.src}}\" width=\"200px\" height=\"200px\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"productName\" class=\"text-muted text-thin\">Product name</label>\n                        <input type=\"text\" name=\"product4name\" class=\"form-control\" [(ngModel)] = 'product4Data.product4name' #product4name = 'ngModel'>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"productDesc\" class=\"text-muted text-thin\">Product description</label>\n                        <!-- <input type=\"text\" name=\"product4desc\" class=\"form-control\"> -->\n                        <textarea class=\"form-control\" rows=\"3\"  name=\"product4desc\" [(ngModel)] = 'product4Data.product4desc' #product4desc = 'ngModel'></textarea>\n                    </div>\n                    <button class=\"btn btn-primary pull-right\" [disabled]=\"!product4Form.form.valid\"  (click)='saveProduct4Data(product4Data); product4Form.reset()'>Save</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n    </div>\n  </tab>\n  <tab>\n    <ng-template tabHeading>\n      <h4 class=\"text-muted text-thin\">Banners <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i></h4>\n    </ng-template>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Banners 1</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #banner1Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your Banner image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"banner1Image\" (change)=\"banner1ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='banner1.src'>\n                  <label class=\"text-muted text-thin\">Banner Preview</label>\n                  <img src=\"{{banner1.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerName\" class=\"text-muted text-thin\">Name</label>\n                  <input type=\"text\" name=\"banner1name\" class=\"form-control\" [(ngModel)] = 'banner1Data.banner1name' #banner1name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerDesc\" class=\"text-muted text-thin\">Banner description</label>\n                  <!-- <input type=\"text\" name=\"product1desc\" class=\"form-control\"> -->\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"banner1desc\" [(ngModel)] = 'banner1Data.banner1desc' #banner1desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!banner1Form.form.valid\"  (click)='saveBanner1Data(banner1Data); banner1Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Banners 2</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #banner2Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your Banner image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"banner2Image\" (change)=\"banner2ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='banner2.src'>\n                  <label class=\"text-muted text-thin\">Banner Preview</label>\n                  <img src=\"{{banner2.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerName\" class=\"text-muted text-thin\">Name</label>\n                  <input type=\"text\" name=\"banner2name\" class=\"form-control\" [(ngModel)] = 'banner2Data.banner2name' #banner2name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerDesc\" class=\"text-muted text-thin\">Banner description</label>\n                  <!-- <input type=\"text\" name=\"product2desc\" class=\"form-control\"> -->\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"banner2desc\" [(ngModel)] = 'banner2Data.banner2desc' #banner2desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!banner2Form.form.valid\"  (click)='saveBanner2Data(banner2Data); banner2Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Banners 3</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #banner3Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your Banner image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"banner3Image\" (change)=\"banner3ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='banner3.src'>\n                  <label class=\"text-muted text-thin\">Banner Preview</label>\n                  <img src=\"{{banner3.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerName\" class=\"text-muted text-thin\">Name</label>\n                  <input type=\"text\" name=\"banner3name\" class=\"form-control\" [(ngModel)] = 'banner3Data.banner3name' #banner3name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerDesc\" class=\"text-muted text-thin\">Banner description</label>\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"banner3desc\" [(ngModel)] = 'banner3Data.banner3desc' #banner3desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!banner3Form.form.valid\"  (click)='saveBanner3Data(banner3Data); banner3Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Banners 4</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #banner4Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your Banner image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"banner4Image\" (change)=\"banner4ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='banner4.src'>\n                  <label class=\"text-muted text-thin\">Banner Preview</label>\n                  <img src=\"{{banner4.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerName\" class=\"text-muted text-thin\">Name</label>\n                  <input type=\"text\" name=\"banner4name\" class=\"form-control\" [(ngModel)] = 'banner4Data.banner4name' #banner4name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerDesc\" class=\"text-muted text-thin\">Banner description</label>\n                  <textarea class=\"form-control\" rows=\"4\"  name=\"banner4desc\" [(ngModel)] = 'banner4Data.banner4desc' #banner4desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!banner4Form.form.valid\"  (click)='saveBanner4Data(banner4Data); banner4Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </tab>\n  <tab>\n    <ng-template tabHeading>\n      <h4 class=\"text-muted text-thin\">Catagories <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i></h4>\n    </ng-template>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Catagory 1</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #catagory1Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your catagory image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"catagory1Image\" (change)=\"catagory1ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='catagory1.src'>\n                  <label class=\"text-muted text-thin\">Catagory Preview</label>\n                  <img src=\"{{catagory1.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"catagoryName\" class=\"text-muted text-thin\">catagory name</label>\n                  <input type=\"text\" name=\"catagory1name\" class=\"form-control\" [(ngModel)] = 'catagory1Data.catagory1name' #catagory1name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"catagoryDesc\" class=\"text-muted text-thin\">catagory description</label>\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"catagory1desc\" [(ngModel)] = 'catagory1Data.catagory1desc' #catagory1desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!catagory1Form.form.valid\"  (click)='savecatagory1Data(catagory1Data); catagory1Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n        <div class=\"col-md-3\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h4 class=\"text-muted text-thin\">Catagory 2</h4>\n            </div>\n            <hr>\n            <div class=\"panel-body\">\n              <form novalidate #catagory2Form = 'ngForm'>\n                <div class=\"form-group\">\n                <label class=\"text-muted text-thin\">Select your catagory image</label>\n                <label for=\"image-input\" class=\"file-upload\">\n                    <button class=\"btn btn-default btn-block\">Upload Image</button>\n                    <input  type=\"file\" name=\"catagory2Image\" (change)=\"catagory2ImageUpload($event)\" >\n                </label>\n              </div>\n                <div class=\"result\" *ngIf='catagory2.src'>\n                    <label class=\"text-muted text-thin\">Catagory Preview</label>\n                    <img src=\"{{catagory2.src}}\" width=\"200px\" height=\"200px\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"catagoryName\" class=\"text-muted text-thin\">catagory name</label>\n                    <input type=\"text\" name=\"catagory2name\" class=\"form-control\" [(ngModel)] = 'catagory2Data.catagory2name' #catagory2name = 'ngModel'>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"catagoryDesc\" class=\"text-muted text-thin\">catagory description</label>\n                    <textarea class=\"form-control\" rows=\"3\"  name=\"catagory2desc\" [(ngModel)] = 'catagory2Data.catagory2desc' #catagory2desc = 'ngModel'></textarea>\n                </div>\n                <button class=\"btn btn-primary pull-right\" [disabled]=\"!catagory2Form.form.valid\"  (click)='savecatagory2Data(catagory2Data); catagory2Form.reset()'>Save</button>\n              </form>\n            </div>\n          </div>\n        </div>\n          <div class=\"col-md-3\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"text-muted text-thin\">Catagory 3</h4>\n              </div>\n              <hr>\n              <div class=\"panel-body\">\n                <form novalidate #catagory3Form = 'ngForm'>\n                  <div class=\"form-group\">\n                  <label class=\"text-muted text-thin\">Select your catagory image</label>\n                  <label for=\"image-input\" class=\"file-upload\">\n                      <button class=\"btn btn-default btn-block\">Upload Image</button>\n                      <input  type=\"file\" name=\"catagory3Image\" (change)=\"catagory3ImageUpload($event)\" >\n                  </label>\n                </div>\n                  <div class=\"result\" *ngIf='catagory3.src'>\n                      <label class=\"text-muted text-thin\">Catagory Preview</label>\n                      <img src=\"{{catagory3.src}}\" width=\"200px\" height=\"200px\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"catagoryName\" class=\"text-muted text-thin\">catagory name</label>\n                      <input type=\"text\" name=\"catagory3name\" class=\"form-control\" [(ngModel)] = 'catagory3Data.catagory3name' #catagory3name = 'ngModel'>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"catagoryDesc\" class=\"text-muted text-thin\">catagory description</label>\n                      <textarea class=\"form-control\" rows=\"3\"  name=\"catagory3desc\" [(ngModel)] = 'catagory3Data.catagory3desc' #catagory3desc = 'ngModel'></textarea>\n                  </div>\n                  <button class=\"btn btn-primary pull-right\" [disabled]=\"!catagory3Form.form.valid\"  (click)='savecatagory3Data(catagory3Data); catagory3Form.reset()'>Save</button>\n                </form>\n              </div>\n            </div>\n          </div>\n            <div class=\"col-md-3\">\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"text-muted text-thin\">Catagory 4</h4>\n                </div>\n                <hr>\n                <div class=\"panel-body\">\n                  <form novalidate #catagory4Form = 'ngForm'>\n                    <div class=\"form-group\">\n                    <label class=\"text-muted text-thin\">Select your catagory image</label>\n                    <label for=\"image-input\" class=\"file-upload\">\n                        <button class=\"btn btn-default btn-block\">Upload Image</button>\n                        <input  type=\"file\" name=\"catagory4Image\" (change)=\"catagory4ImageUpload($event)\" >\n                    </label>\n                  </div>\n                    <div class=\"result\" *ngIf='catagory4.src'>\n                        <label class=\"text-muted text-thin\">Catagory Preview</label>\n                        <img src=\"{{catagory4.src}}\" width=\"200px\" height=\"200px\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"catagoryName\" class=\"text-muted text-thin\">catagory name</label>\n                        <input type=\"text\" name=\"catagory4name\" class=\"form-control\" [(ngModel)] = 'catagory4Data.catagory4name' #catagory4name = 'ngModel'>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"catagoryDesc\" class=\"text-muted text-thin\">catagory description</label>\n                        <textarea class=\"form-control\" rows=\"3\"  name=\"catagory4desc\" [(ngModel)] = 'catagory4Data.catagory4desc' #catagory4desc = 'ngModel'></textarea>\n                    </div>\n                    <button class=\"btn btn-primary pull-right\" [disabled]=\"!catagory4Form.form.valid\"  (click)='savecatagory4Data(catagory4Data); catagory4Form.reset()'>Save</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n      \n    </div>\n  </tab>\n</tabset>"

/***/ }),

/***/ 1017:
/***/ (function(module, exports) {

module.exports = "<p>\n  home-page works!\n</p>\n"

/***/ }),

/***/ 1018:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 1019:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Sales Report</div>\n\n<!-- START row-->\n<div class=\"row\">\n    <div class=\"col-lg-3\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-4 bg-info text-center\">\n                    <em class=\"fa fa-line-chart fa-2x\"></em>\n                </div>\n                <div class=\"col-xs-8\">\n                    <div class=\"panel-body text-center\">\n                        <h4 class=\"mt0\">$ 13363534</h4>\n                        <p class=\"mb0 text-muted\">Total sales YTD</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-3\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-4 bg-danger text-center\">\n                    <em class=\"fa fa-filter fa-2x\"></em>\n                </div>\n                <div class=\"col-xs-8\">\n                    <div class=\"panel-body text-center\">\n                        <h4 class=\"mt0\">$56546</h4>\n                        <p class=\"mb0 text-muted\">Current QTR</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-3\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-4 bg-inverse text-center\">\n                    <em class=\"fa fa-percent fa-2x\"></em>\n                </div>\n                <div class=\"col-xs-8\">\n                    <div class=\"panel-body text-center\">\n                        <h4 class=\"mt0\">$234</h4>\n                        <p class=\"mb0 text-muted\">Average sale value</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-3\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-4 bg-green text-center\">\n                    <em class=\"fa fa-gift fa-2x\"></em>\n                </div>\n                <div class=\"col-xs-8\">\n                    <div class=\"panel-body text-center\">\n                        <h4 class=\"mt0\">$838</h4>\n                        <p class=\"mb0 text-muted\">Average discount value</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n</div>\n<!-- END row-->\n<!-- START panel tab-->\n<div class=\"row\">\n    <div class=\"col-lg-9\">\n        <div class=\"form-group mb-xl\">\n            <input class=\"form-control mb\" type=\"text\" placeholder=\"Search products, products, etc.\" />\n        </div>\n        <div class=\"panel\">\n                \n            <tabset class=\"bg-white p0\" [justified]=\"true\">\n                \n                <tab>\n                    <ng-template tabHeading>\n                        <em class=\"fa fa-money fa-fw\"></em>Transactions Panel\n                    </ng-template>\n                    <div>\n                        <!-- START table responsive-->\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-bordered table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th>Order #</th>\n                                        <th>Order Date</th>\n                                        <th>Order Time</th>\n                                        <th>Amount (USD)</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>3326</td>\n                                        <td>10/21/2013</td>\n                                        <td>3:29 PM</td>\n                                        <td>$321.33</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3325</td>\n                                        <td>10/21/2013</td>\n                                        <td>3:20 PM</td>\n                                        <td>$234.34</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3324</td>\n                                        <td>10/21/2013</td>\n                                        <td>3:03 PM</td>\n                                        <td>$724.17</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3323</td>\n                                        <td>10/21/2013</td>\n                                        <td>3:00 PM</td>\n                                        <td>$23.71</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3322</td>\n                                        <td>10/21/2013</td>\n                                        <td>2:49 PM</td>\n                                        <td>$8345.23</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3321</td>\n                                        <td>10/21/2013</td>\n                                        <td>2:23 PM</td>\n                                        <td>$245.12</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3320</td>\n                                        <td>10/21/2013</td>\n                                        <td>2:15 PM</td>\n                                        <td>$5663.54</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3319</td>\n                                        <td>10/21/2013</td>\n                                        <td>2:13 PM</td>\n                                        <td>$943.45</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- END table responsive-->\n                        <div class=\"panel-footer text-right\"><a class=\"btn btn-default btn-sm\" href=\"#\">View All Transactions</a>\n                        </div>\n                    </div>\n                </tab>\n            </tabset>\n        </div>\n    </div>\n    <div class=\"col-lg-3\">\n        <h3 class=\"m0 pb-lg\">Search Orders</h3>\n        <!-- <div class=\"form-group mb-xl\">\n            <label class=\"control-label mb\">by Text</label>\n            <br/>\n            <ng-select [allowClear]=\"true\" [items]=\"items\" placeholder=\"Nothing selected\"></ng-select>\n        </div> -->\n        <div class=\"form-group mb-xl\">\n            <label class=\"control-label mb\">From Date</label>\n            <br/>\n            <p class=\"input-group\">\n                <input class=\"form-control\" type=\"date\" />\n                <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">\n                    <em class=\"fa fa-calendar\"></em>\n                </button>\n            </span>\n            </p>\n        </div>\n        <div class=\"form-group mb-xl\">\n            <label class=\"control-label mb\">To Date</label>\n            <br/>\n            <p class=\"input-group\">\n                <input class=\"form-control\" type=\"date\" />\n                <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">\n                    <em class=\"fa fa-calendar\"></em>\n                </button>\n            </span>\n            </p>\n        </div>\n        <!-- <div class=\"form-group mb-xl\">\n            <label class=\"control-label mb\">by Date</label>\n            <br/>\n            <p class=\"input-group\">\n                <input class=\"form-control\" type=\"date\" />\n                <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">\n                    <em class=\"fa fa-calendar\"></em>\n                </button>\n            </span>\n            </p>\n        </div> -->\n        <div class=\"form-group mb-xl\">\n          <label class=\"control-label mb\">Order no:</label>\n          <br>\n          <input type=\"text\" class=\"slider slider-lg form-control\">\n        </div>\n        <button class=\"btn btn-default btn-lg\">Apply</button>\n    </div>\n</div>\n<!-- END panel tab-->\n"

/***/ }),

/***/ 1020:
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\">\n    <tab>\n        <ng-template tabHeading>\n            <em class=\"icon-equalizer fa-lg\"></em>\n        </ng-template>\n        <!-- <h3 class=\"text-center text-thin\">Settings</h3> -->\n        <!-- Theme Settings -->\n        <div class=\"p\">\n            <h4 class=\"text-muted text-thin\">Themes</h4>\n            <p class=\"text-muted text-thin\">Select your theme :</p>\n            <div class=\"table-grid mb\">\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"A\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-info\"></span>\n                          <span class=\"color bg-info-light\"></span>\n                          </span>\n                          <span class=\"color bg-white\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"B\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-green\"></span>\n                          <span class=\"color bg-green-light\"></span>\n                          </span>\n                          <span class=\"color bg-white\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"C\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-purple\"></span>\n                          <span class=\"color bg-purple-light\"></span>\n                          </span>\n                          <span class=\"color bg-white\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"D\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-danger\"></span>\n                          <span class=\"color bg-danger-light\"></span>\n                          </span>\n                          <span class=\"color bg-white\"></span>\n                      </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"table-grid mb\">\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"E\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-info-dark\"></span>\n                          <span class=\"color bg-info\"></span>\n                          </span>\n                          <span class=\"color bg-gray-dark\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"F\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-green-dark\"></span>\n                          <span class=\"color bg-green\"></span>\n                          </span>\n                          <span class=\"color bg-gray-dark\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"G\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-purple-dark\"></span>\n                          <span class=\"color bg-purple\"></span>\n                          </span>\n                          <span class=\"color bg-gray-dark\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"H\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-danger-dark\"></span>\n                          <span class=\"color bg-danger\"></span>\n                          </span>\n                          <span class=\"color bg-gray-dark\"></span>\n                      </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </tab>\n</tabset>\n<tabset [justified]=\"true\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"text-muted text-thin\">Logo</h4>\n                </div>\n                <hr>\n                <div class=\"panel-body\">\n                    <p class=\"text-muted text-thin\">*Note: Please upload Logo of width 100px and height 40px.</p>\n                    <h4 class=\"text-muted text-thin\">Select file : </h4>\n                    <input filestyle=\"\" type=\"file\" data-button-text=\"Single\" data-class-button=\"btn btn-default\" data-classinput=\"form-control inline\" nv-file-select=\"\" uploader=\"form.uploader\" class=\"form-control\" id=\"filestyle-1\" tabindex=\"-1\" style=\"position: absolute; clip: rect(0px 0px 0px 0px);\"\n                        (change)=\"logoUploadBase64($event)\">\n                    <div class=\"bootstrap-filestyle input-group\">\n                        <input type=\"text\" class=\"form-control \" placeholder=\"\" disabled=\"\">\n                        <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\">\n                    <label for=\"filestyle-1\" class=\"btn btn-default \"><span class=\"icon-span-filestyle glyphicon glyphicon-folder-open\"></span>\n                        <span class=\"buttonText\">Upload Logo</span>\n                        </label>\n                        </span>\n                    </div>\n                    <div class=\"result\" *ngIf='image.src'>\n                        <h4 class=\"text-muted text-thin\">Logo Preview</h4><br>\n                        <div class=\"text-center\">\n                            <img src={{image.src}} height=\"40px\" width=\"100px\"><br>\n                            <button class=\"btn btn-primary pull-right\" (click)='saveLogo()'>Save Logo</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"text-muted text-thin\">Logo Icon</h4>\n                </div>\n                <hr>\n                <div class=\"panel-body\">\n                    <p class=\"text-muted text-thin\">*Note: Please upload Logo of width 42px and height 44px.</p>\n                    <h4 class=\"text-muted text-thin\">Select file : </h4>\n                    <input filestyle=\"\" type=\"file\" data-button-text=\"Single\" data-class-button=\"btn btn-default\" data-classinput=\"form-control inline\" nv-file-select=\"\" uploader=\"form.uploader\" class=\"form-control\" id=\"filestyle-2\" tabindex=\"-1\" style=\"position: absolute; clip: rect(0px 0px 0px 0px);\"\n                        (change)=\"IconUploadBase64($event)\">\n                    <div class=\"bootstrap-filestyle input-group\">\n                        <input type=\"text\" class=\"form-control \" placeholder=\"\" disabled=\"\">\n                        <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\">\n                                <label for=\"filestyle-2\" class=\"btn btn-default \"><span class=\"icon-span-filestyle glyphicon glyphicon-folder-open\"></span>\n                        <span class=\"buttonText\">Upload Logo Icon</span>\n                        </label>\n                        </span>\n                    </div>\n                    <div class=\"result\" *ngIf='icon.src'>\n                        <h4 class=\"text-muted text-thin\">Logo Icon Preview</h4><br>\n                        <div class=\"text-center\">\n                            <img src={{icon.src}} height=\"42px\" width=\"44px\"><br>\n                            <button class=\"btn btn-primary pull-right\" (click)='saveLogoIcon()'>Save Logo</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</tabset>\n<tabset [justified]=\"true\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"text-muted text-thin\">App name</h4>\n                </div>\n                <hr>\n                <div class=\"panel-body\">\n                    <form novalidate #appNameForm='ngForm'>\n                        <div class=\"form-group\">\n                            <label for=\"appName\">App name:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"name\" placeholder=\"Please enter our app name here\" [(ngModel)]='data.name' #name='ngModel' minlength=\"3\" required>\n                            <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"error\">\n                                <span class=\"text-danger\" [hidden]=\"!name.errors.required\">Please Enter the app name </span>\n                                <span class=\"text-danger\" [hidden]=\"!name.errors.minlength\">app name should be more than 3 characters.</span>\n                            </div>\n                        </div>\n                        <button class=\"btn btn-primary pull-right\" [disabled]=\"!appNameForm.form.valid\" (click)='saveAppName(data); appNameForm.reset()'>Save</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</tabset>"

/***/ }),

/***/ 1021:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\n  Users List\n  <!-- <small>Native and not wrapped angular2 based data-tables</small> -->\n</div>\n<!-- <alert [type]=\"'info'\">None of this examples are based on the official jQuery-Datatables</alert> -->\n<!-- <h4 class=\"page-header\">ng2 Table\n  <small>Simple table extension with sorting, filtering, paging... for Angular2 apps by ValorSoftware</small>\n</h4> -->\n<div class=\"mb-lg clearfix\">\n  <div class=\"pull-let wd-md\">\n      <input *ngIf=\"config.filtering\" placeholder=\"Filter all columns\" [ngTableFiltering]=\"config.filtering\" class=\"form-control\" (tableChanged)=\"onChangeTable(config)\" />\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n  </ng-table>\n</div>\n<div class=\"text-right\">\n  <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\" (numPages)=\"numPages = $event\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ 1022:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- top navbar-->\n    <app-top-navbar class=\"topnavbar-wrapper\"></app-top-navbar>\n    <!-- sidebar-->\n    <app-side-navbar class=\"aside\" (openModal)=\"showModal($event)\"></app-side-navbar>\n    <!-- offsidebar-->\n    <!--<app-offsidebar class=\"offsidebar\"></app-offsidebar>-->\n    <!-- Main section-->\n    <section>\n        <!-- Page content-->\n        <div class=\"content-wrapper\">\n            <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-lg\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h4 class=\"modal-title pull-left\">Large modal</h4>\n                            <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body\">\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <router-outlet></router-outlet>\n        </div>\n    </section>\n    <!-- Page footer-->\n    <!--<footer app-footer></footer>-->\n</div>"

/***/ }),

/***/ 1023:
/***/ (function(module, exports) {

module.exports = "<!-- START Sidebar (left)-->\n<div class=\"aside-inner\">\n    <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\n\n        <!-- START sidebar nav-->\n        <ul class=\"nav\">\n\n            <!-- START user info-->\n            <li class=\"has-user-block\">\n                <app-userblock (someEvent)=\"test($event)\"></app-userblock>\n            </li>\n            <!-- END user info-->\n\n            <li *ngFor='let item of menuItems' [ngClass]=\"{'nav-heading': item.heading}\" [routerLinkActive]=\"['active']\">\n                <!-- menu heading -->\n                <span *ngIf=\"item.heading\">{{(item.translate | translate) || item.text}}</span>\n                <!-- external links -->\n                <a *ngIf=\"!item.heading && !item.submenu && item.elink\" [attr.target]=\"item.target\" [attr.href]=\"item.elink\" title=\"{{item.text}}\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- single menu item -->\n                <a *ngIf=\"!item.heading && !item.submenu && !item.elink\" [routerLink]=\"item.link\" [attr.route]=\"item.link\" title=\"{{item.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- has submenu -->\n                <a *ngIf=\"!item.heading && item.submenu\" title=\"{{item.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- SUBLEVEL -->\n                <ul *ngIf=\"item.submenu\" class=\"nav sidebar-subnav\" [routerLinkActive]=\"['opening']\">\n                    <li class=\"sidebar-subnav-header\">{{(item.translate | translate) || item.text}}</li>\n                    <li *ngFor='let subitem of item.submenu' [routerLinkActive]=\"['active']\">\n                        <!-- sublevel: external links -->\n                        <a *ngIf=\"!subitem.heading && !subitem.submenu && subitem.elink\" [attr.target]=\"subitem.target\" [attr.href]=\"subitem.elink\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: single menu item  -->\n                        <a *ngIf=\"!subitem.submenu && !subitem.elink\" [routerLink]=\"subitem.link\" [attr.route]=\"subitem.link\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: has submenu -->\n                        <a *ngIf=\"subitem.submenu\" title=\"{{subitem.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- SUBLEVEL 2 -->\n                        <ul *ngIf=\"subitem.submenu\" class=\"nav sidebar-subnav level2\" [routerLinkActive]=\"['opening']\">\n                            <li *ngFor='let subitem2 of subitem.submenu' [routerLinkActive]=\"['active']\">\n                                <!-- sublevel 2: single menu item  -->\n                                <a *ngIf=\"!subitem2.submenu\" [routerLink]=\"subitem2.link\" [attr.route]=\"subitem2.link\" title=\"{{subitem2.text}}\">\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- sublevel2: has submenu -->\n                                <a *ngIf=\"subitem2.submenu\" title=\"{{subitem2.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- SUBLEVEL 3 -->\n                                <ul *ngIf=\"subitem2.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                    <li *ngFor='let subitem3 of subitem2.submenu' [routerLinkActive]=\"['active']\">\n                                        <!-- sublevel 2: single menu item  -->\n                                        <a *ngIf=\"!subitem3.submenu\" [routerLink]=\"subitem3.link\" [attr.route]=\"subitem3.link\" title=\"{{subitem3.text}}\">\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- sublevel3: has submenu -->\n                                        <a *ngIf=\"subitem3.submenu\" title=\"{{subitem3.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- SUBLEVEL 4 -->\n                                        <ul *ngIf=\"subitem3.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                            <li *ngFor='let subitem4 of subitem3.submenu' [routerLinkActive]=\"['active']\">\n                                                <!-- sublevel 2: single menu item  -->\n                                                <a *ngIf=\"!subitem4.submenu\" [routerLink]=\"subitem4.link\" [attr.route]=\"subitem4.link\" title=\"{{subitem4.text}}\">\n                                                    <span class=\"pull-right\" *ngIf=\"subitem4.alert\" [ngClass]=\"subitem4.label || 'label label-success'\">{{subitem4.alert}}</span>\n                                                    <em class=\"{{subitem4.icon}}\" *ngIf=\"subitem4.icon\"></em>\n                                                    <span>{{(subitem4.translate | translate) || subitem4.text}}</span>\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                                <li>\n                        </ul>\n                        <li>\n                </ul>\n                </li>\n\n        </ul>\n        <!-- END sidebar nav-->\n\n    </nav>\n</div>\n<!-- END Sidebar (left)-->"

/***/ }),

/***/ 1024:
/***/ (function(module, exports) {

module.exports = "<div class=\"item user-block\" *ngIf=\"userBlockIsVisible()\">\n    <!-- User picture-->\n    <div class=\"user-block-picture\">\n        <div class=\"user-block-status\">\n            <img class=\"img-thumbnail img-circle\" [src]=\"user.picture\" alt=\"Avatar\" />\n            <div class=\"circle circle-success circle-lg\"></div>\n        </div>\n    </div>\n    <!-- Name and Job-->\n    <div class=\"user-block-info\">\n        <span class=\"user-block-name\">Welcome Ashok\n            <!--<i class=\"fa fa-pencil-square-o profileEdit\" aria-hidden=\"true\" (click)=\"callParent()\"></i>-->\n            </span>\n        <span class=\"user-block-role\">Programmer</span>\n    </div>\n</div>"

/***/ }),

/***/ 1025:
/***/ (function(module, exports) {

module.exports = "<!-- START Search form-->\n<form class=\"navbar-form\" role=\"search\" action=\"search.html\" [class.open]=\"visible\" (submit)=\"handleForm()\">\n    <div class=\"form-group has-feedback\">\n        <input [(ngModel)]=\"term\" name=\"term\" class=\"form-control\" type=\"text\" placeholder=\"{{'header.search.PLACEHOLDER' | translate}}\" />\n        <div class=\"fa fa-times form-control-feedback\" (click)=\"closeNavSearch()\"></div>\n    </div>\n    <button class=\"hidden btn btn-default\" type=\"submit\">Submit</button>\n</form>\n<!-- END Search form-->\n"

/***/ }),

/***/ 1026:
/***/ (function(module, exports) {

module.exports = "<!-- START Top Navbar-->\n<nav class=\"navbar topnavbar\" role=\"navigation\">\n    <!-- START navbar header-->\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\"'/'\">\n            <div class=\"brand-logo\">\n                <img class=\"img-responsive\" src=\"{{logo}}\" alt=\"App Logo\"  style=\"height:40px;width:100px;\"/>\n            </div>\n            <div class=\"brand-logo-collapsed\">\n                <img class=\"img-responsive\" src=\"{{logoIcon}}\" alt=\"App Logo\" />\n            </div>\n        </a>\n            <!-- <a class=\"navbar-brand brand\" [routerLink]=\"'/home'\"> -->\n                <!--<svg viewbox=\"0 0 220 44\" width=\"220\" height=\"44\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <title>EDCO Products, Steel Roofing and Siding</title>\n                    <g class=\"logoMark\">\n                        <path d=\"M1.4,2.4h38v39.2h-38V2.4z\" fill=\"#fff\"> </path>\n                        <path d=\"M0.1,1v42h40.6V1H0.1z M3.5,37.4V8.1l10.3,14.4L3.5,37.4z M15.2,39.7V5.2l12.1,17.6L15.2,39.7z M28.8,37.4 L29,7.8L38.9,23L28.8,37.4z\"\n                            fill=\"#c6202c\"> </path>\n                    </g>-->\n                    <!--<path class=\"logoType\" d=\"M46.092.98h37.793v10.11h-21.43v5.963h20.5V27.18h-20.5v5.716H84.32V43.02H46.092V.98m40.03 0h24.537c12.48 0 21.29 4.1 21.29 21.144 0 15.903-9.48 20.897-21.97 20.897H86.13zm16.734 31.555h4.162c6.063 0 7.43-3.85 7.43-10.833 0-7.23-1.49-10.97-7.48-10.97h-4.1zm68.542 9.517a49.372 49.372 0 0 1-12 1.69c-14.475 0-26.09-7.33-26.09-22.338 0-14.1 12.112-21.145 26.09-21.145a60.752 60.752 0 0 1 11.876 1.31v11.11a28.947 28.947 0 0 0-8.36-1.59c-7.12 0-12.5 3.68-12.5 10.56 0 7.2 4.995 10.89 11.927 10.89a28.078 28.078 0 0 0 9.07-1.655zm24.252 1.69c-15.232 0-24.165-7.405-24.165-21.742 0-14.088 8.945-21.74 24.165-21.74C210.893.257 220 7.91 220 22c0 14.337-9.107 21.742-24.35 21.742m0-10.126c6.62 0 6.808-7.106 6.882-11.616-.074-3.913-.497-11.63-6.883-11.63-6.18 0-6.68 7.704-6.68 11.63 0 4.51.69 11.616 6.68 11.616\">\n                    </path>-->\n                <!--</svg>-->\n                <!-- nayo\n            </a> -->\n    </div>\n    <!-- END navbar header-->\n    <!-- START Nav wrapper-->\n    <div class=\"nav-wrapper\">\n        <!-- START Left navbar-->\n        <ul class=\"nav navbar-nav\">\n            <li>\n        <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n        <a class=\"hidden-xs\" trigger-resize=\"\" (click)=\"toggleCollapsedSideabar()\" *ngIf=\"!isCollapsedText()\">\n                    <em class=\"fa fa-navicon\"></em>\n                </a>\n        <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\n        <a class=\"visible-xs sidebar-toggle\" (click)=\"settings.layout.asideToggled =! settings.layout.asideToggled\">\n                    <em class=\"fa fa-navicon\"></em>\n                </a>\n        </li>\n        <!-- START User avatar toggle-->\n        <!--<li>-->\n        <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n        <!--<a (click)=\"toggleUserBlock($event)\">\n                    <em class=\"icon-user\"></em>\n                </a>\n            </li>-->\n        <!-- END User avatar toggle-->\n        <!-- START lock screen-->\n        <!--<li>\n                <a  title=\"Lock screen\" [routerLink]=\"'/lock'\">\n                    <em class=\"icon-lock\"></em>\n                </a>\n            </li>-->\n        <!-- END lock screen-->\n        </ul>\n        <!-- END Left navbar-->\n        <!-- START Right Navbar-->\n        <ul class=\"nav navbar-nav navbar-right\">\n            <!-- Search icon-->\n            <li>\n                <a (click)=\"openNavSearch($event)\">\n                    <em class=\"icon-magnifier\"></em>\n                </a>\n            </li>\n            <!-- Fullscreen (only desktops)-->\n            <!-- <li class=\"visible-lg\">\n                <a #fsbutton (click)=\"toggleFullScreen($event)\">\n                    <em class=\"fa fa-expand\"></em>\n                </a>\n            </li> -->\n            <!--<li class=\"visible-lg\">\n                <a #fsbutton [routerLink]=\"'/login'\">Login\n                </a>\n            </li>-->\n            <!-- START Alert menu-->\n            <li class=\"dropdown dropdown-list\" dropdown>\n                <a dropdownToggle>\n                    <em class=\"icon-bell\"></em>\n                    <div class=\"label label-danger\">11</div>\n                </a>\n                <!-- START Dropdown menu-->\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\n                    <li>\n                        <!-- START list group-->\n                        <div class=\"list-group\">\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-twitter fa-2x text-info\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">New followers</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>1 new follower</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-envelope fa-2x text-warning\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">New e-mails</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>You have 10 new emails</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-tasks fa-2x text-success\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">Pending Tasks</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>11 pending task</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- last list item-->\n                            <a class=\"list-group-item\">\n                                <small translate=\"topbar.notification.MORE\">More notifications</small>\n                                <span class=\"label label-danger pull-right\">14</span>\n                            </a>\n                        </div>\n                        <!-- END list group-->\n                    </li>\n                </ul>\n                <!-- END Dropdown menu-->\n            </li>\n            <!-- END Alert menu-->\n            <!-- START Offsidebar button-->\n            <!--<li>\n                <a (click)=\"toggleOffsidebar()\">\n                    <em class=\"icon-notebook\"></em>\n                </a>\n            </li>-->\n            <!-- END Offsidebar menu-->\n        </ul>\n        <!-- END Right Navbar-->\n    </div>\n    <!-- END Nav wrapper-->\n\n    <app-navsearch [visible]=\"getNavSearchVisible()\" (onclose)=\"setNavSearchVisible(false)\"></app-navsearch>\n\n</nav>\n<!-- END Top Navbar-->"

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_table_ng2_table__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_table_ng2_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_table_ng2_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_tag_input__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_routing_module__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_component__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__top_navbar_top_navbar_component__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__top_navbar_navsearch_navsearch_component__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__side_navbar_side_navbar_component__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__side_navbar_userblock_userblock_component__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_theme_settings_theme_settings_component__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_menu_menu_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__side_navbar_userblock_userblock_service__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__menu__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_sales_reports_sales_reports_component__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_activity_reports_activity_reports_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dasboard_dasboard_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_home_page_home_page_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_featured_products_featured_products_component__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_users_list_users_list_component__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_document_library_document_library_component__ = __webpack_require__(913);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Shared module



// Dashoard Routing

// Dasboard and it's child components







//Services
// import { SettingsService } from './services/settings/settings.service';

// import { ThemesService } from './services/themes/themes.service';

//Naigation Menu








var DashboardModule = (function () {
    function DashboardModule(menuService) {
        this.menuService = menuService;
        menuService.addMenu(__WEBPACK_IMPORTED_MODULE_19__menu__["a" /* menu */]);
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__["a" /* ImageCropperModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_table_ng2_table__["Ng2TableModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_tag_input__["TagInputModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_16__components_theme_settings_theme_settings_component__["a" /* ThemeSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__top_navbar_top_navbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__side_navbar_side_navbar_component__["a" /* SideNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__top_navbar_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_15__side_navbar_userblock_userblock_component__["a" /* UserblockComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_sales_reports_sales_reports_component__["a" /* SalesReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_activity_reports_activity_reports_component__["a" /* ActivityReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_dasboard_dasboard_component__["a" /* DasboardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_featured_products_featured_products_component__["a" /* FeaturedProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_users_list_users_list_component__["a" /* UsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_document_library_document_library_component__["a" /* DocumentLibraryComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__side_navbar_userblock_userblock_service__["a" /* UserblockService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_17__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], DashboardModule);

var _a;
//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
function setProperty(renderer, elementRef, propName, propValue) {
    renderer.setElementProperty(elementRef, propName, propValue);
}
var NgTableFilteringDirective = (function () {
    function NgTableFilteringDirective(element, renderer) {
        this.ngTableFiltering = {
            filterString: '',
            columnName: 'name'
        };
        this.tableChanged = new core_1.EventEmitter();
        this.element = element;
        this.renderer = renderer;
        // Set default value for filter
        setProperty(this.renderer, this.element, 'value', this.ngTableFiltering.filterString);
    }
    Object.defineProperty(NgTableFilteringDirective.prototype, "config", {
        get: function () {
            return this.ngTableFiltering;
        },
        set: function (value) {
            this.ngTableFiltering = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTableFilteringDirective.prototype.onChangeFilter = function (event) {
        this.ngTableFiltering.filterString = event;
        this.tableChanged.emit({ filtering: this.ngTableFiltering });
    };
    NgTableFilteringDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTableFiltering]' },] },
    ];
    /** @nocollapse */
    NgTableFilteringDirective.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ];
    NgTableFilteringDirective.propDecorators = {
        'ngTableFiltering': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onChangeFilter': [{ type: core_1.HostListener, args: ['input', ['$event.target.value'],] },],
    };
    return NgTableFilteringDirective;
}());
exports.NgTableFilteringDirective = NgTableFilteringDirective;


/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var NgTablePagingDirective = (function () {
    function NgTablePagingDirective() {
        this.ngTablePaging = true;
        this.tableChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(NgTablePagingDirective.prototype, "config", {
        get: function () {
            return this.ngTablePaging;
        },
        set: function (value) {
            this.ngTablePaging = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTablePagingDirective.prototype.onChangePage = function (event) {
        // Object.assign(this.config, event);
        if (this.ngTablePaging) {
            this.tableChanged.emit({ paging: event });
        }
    };
    NgTablePagingDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTablePaging]' },] },
    ];
    /** @nocollapse */
    NgTablePagingDirective.ctorParameters = [];
    NgTablePagingDirective.propDecorators = {
        'ngTablePaging': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onChangePage': [{ type: core_1.HostListener, args: ['pagechanged', ['$event'],] },],
    };
    return NgTablePagingDirective;
}());
exports.NgTablePagingDirective = NgTablePagingDirective;


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var NgTableSortingDirective = (function () {
    function NgTableSortingDirective() {
        this.sortChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(NgTableSortingDirective.prototype, "config", {
        get: function () {
            return this.ngTableSorting;
        },
        set: function (value) {
            this.ngTableSorting = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTableSortingDirective.prototype.onToggleSort = function (event) {
        if (event) {
            event.preventDefault();
        }
        if (this.ngTableSorting && this.column && this.column.sort !== false) {
            switch (this.column.sort) {
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                case 'desc':
                    this.column.sort = '';
                    break;
                default:
                    this.column.sort = 'asc';
                    break;
            }
            this.sortChanged.emit(this.column);
        }
    };
    NgTableSortingDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTableSorting]' },] },
    ];
    /** @nocollapse */
    NgTableSortingDirective.ctorParameters = [];
    NgTableSortingDirective.propDecorators = {
        'ngTableSorting': [{ type: core_1.Input },],
        'column': [{ type: core_1.Input },],
        'sortChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onToggleSort': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return NgTableSortingDirective;
}());
exports.NgTableSortingDirective = NgTableSortingDirective;


/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(41);
var NgTableComponent = (function () {
    function NgTableComponent(sanitizer) {
        this.sanitizer = sanitizer;
        // Table values
        this.rows = [];
        // Outputs (Events)
        this.tableChanged = new core_1.EventEmitter();
        this.cellClicked = new core_1.EventEmitter();
        this.showFilterRow = false;
        this._columns = [];
        this._config = {};
    }
    Object.defineProperty(NgTableComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (conf) {
            if (!conf.className) {
                conf.className = 'table-striped table-bordered';
            }
            if (conf.className instanceof Array) {
                conf.className = conf.className.join(' ');
            }
            this._config = conf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgTableComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (values) {
            var _this = this;
            values.forEach(function (value) {
                if (value.filtering) {
                    _this.showFilterRow = true;
                }
                if (value.className && value.className instanceof Array) {
                    value.className = value.className.join(' ');
                }
                var column = _this._columns.find(function (col) { return col.name === value.name; });
                if (column) {
                    Object.assign(column, value);
                }
                if (!column) {
                    _this._columns.push(value);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    NgTableComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    Object.defineProperty(NgTableComponent.prototype, "configColumns", {
        get: function () {
            var sortColumns = [];
            this.columns.forEach(function (column) {
                if (column.sort) {
                    sortColumns.push(column);
                }
            });
            return { columns: sortColumns };
        },
        enumerable: true,
        configurable: true
    });
    NgTableComponent.prototype.onChangeTable = function (column) {
        this._columns.forEach(function (col) {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });
        this.tableChanged.emit({ sorting: this.configColumns });
    };
    NgTableComponent.prototype.getData = function (row, propertyName) {
        return propertyName.split('.').reduce(function (prev, curr) { return prev[curr]; }, row);
    };
    NgTableComponent.prototype.cellClick = function (row, column) {
        this.cellClicked.emit({ row: row, column: column });
    };
    NgTableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-table',
                    template: "\n    <table class=\"table dataTable\" ngClass=\"{{config.className || ''}}\"\n           role=\"grid\" style=\"width: 100%;\">\n      <thead>\n        <tr role=\"row\">\n          <th *ngFor=\"let column of columns\" [ngTableSorting]=\"config\" [column]=\"column\" \n              (sortChanged)=\"onChangeTable($event)\" ngClass=\"{{column.className || ''}}\">\n            {{column.title}}\n            <i *ngIf=\"config && column.sort\" class=\"pull-right fa\"\n              [ngClass]=\"{'fa-chevron-down': column.sort === 'desc', 'fa-chevron-up': column.sort === 'asc'}\"></i>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr *ngIf=\"showFilterRow\">\n        <td *ngFor=\"let column of columns\">\n          <input *ngIf=\"column.filtering\" placeholder=\"{{column.filtering.placeholder}}\"\n                 [ngTableFiltering]=\"column.filtering\"\n                 class=\"form-control\"\n                 style=\"width: auto;\"\n                 (tableChanged)=\"onChangeTable(config)\"/>\n        </td>\n      </tr>\n        <tr *ngFor=\"let row of rows\">\n          <td (click)=\"cellClick(row, column.name)\" *ngFor=\"let column of columns\" [innerHtml]=\"sanitize(getData(row, column.name))\"></td>\n        </tr>\n      </tbody>\n    </table>\n  "
                },] },
    ];
    /** @nocollapse */
    NgTableComponent.ctorParameters = [
        { type: platform_browser_1.DomSanitizer, },
    ];
    NgTableComponent.propDecorators = {
        'rows': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'cellClicked': [{ type: core_1.Output },],
        'columns': [{ type: core_1.Input },],
    };
    return NgTableComponent;
}());
exports.NgTableComponent = NgTableComponent;


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(906);
var file_item_class_1 = __webpack_require__(934);
var file_type_class_1 = __webpack_require__(998);
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    sendable.append(key, _this.options.additionalParameter[key]);
                });
            }
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // protected _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*protected _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cropperDrawSettings__ = __webpack_require__(936);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropperSettings; });

var CropperSettings = (function () {
    function CropperSettings() {
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this.dynamicSizing = false;
        this.width = 200;
        this.height = 200;
        this.minWidth = 50;
        this.minHeight = 50;
        this.minWithRelativeToResolution = true;
        this.croppedWidth = 100;
        this.croppedHeight = 100;
        this.cropperDrawSettings = new __WEBPACK_IMPORTED_MODULE_0__cropperDrawSettings__["a" /* CropperDrawSettings */]();
        this.touchRadius = 20;
        this.noFileInput = false;
        this.allowedFilesRegex = /\.(jpe?g|png|gif)$/i;
        this.preserveSize = false;
        this.compressRatio = 1.0;
        this._rounded = false;
        this._keepAspect = true;
        // init
    }
    Object.defineProperty(CropperSettings.prototype, "rounded", {
        get: function () {
            return this._rounded;
        },
        set: function (val) {
            this._rounded = val;
            if (val) {
                this._keepAspect = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CropperSettings.prototype, "keepAspect", {
        get: function () {
            return this._keepAspect;
        },
        set: function (val) {
            if (val === false && this._rounded) {
                throw new Error('Cannot set keep aspect to false on rounded cropper. Ellipsis not supported');
            }
            this._keepAspect = val;
        },
        enumerable: true,
        configurable: true
    });
    return CropperSettings;
}());

//# sourceMappingURL=cropperSettings.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointPool__ = __webpack_require__(910);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bounds; });

var Bounds = (function () {
    function Bounds(x, y, width, height) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
    }
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Bounds.prototype.getCentre = function () {
        var w = this.width;
        var h = this.height;
        return __WEBPACK_IMPORTED_MODULE_0__pointPool__["a" /* PointPool */].instance.borrow(this.left + (w / 2), this.top + (h / 2));
    };
    ;
    return Bounds;
}());

//# sourceMappingURL=bounds.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(941);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointPool; });

var PointPool = (function () {
    function PointPool(initialSize) {
        PointPool._instance = this;
        var prev = this.firstAvailable = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]();
        for (var i = 1; i < initialSize; i++) {
            var p = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]();
            prev.next = p;
            prev = p;
        }
    }
    Object.defineProperty(PointPool, "instance", {
        get: function () {
            return PointPool._instance;
        },
        enumerable: true,
        configurable: true
    });
    PointPool.prototype.borrow = function (x, y) {
        if (this.firstAvailable == null) {
            throw 'Pool exhausted';
        }
        this.borrowed++;
        var p = this.firstAvailable;
        this.firstAvailable = p.next;
        p.x = x;
        p.y = y;
        return p;
    };
    ;
    PointPool.prototype.returnPoint = function (p) {
        this.borrowed--;
        p.x = 0;
        p.y = 0;
        p.next = this.firstAvailable;
        this.firstAvailable = p;
    };
    ;
    return PointPool;
}());

//# sourceMappingURL=pointPool.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__ = __webpack_require__(450);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityReportsComponent = (function () {
    function ActivityReportsComponent(colors) {
        this.colors = colors;
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        this.sparkOptions1 = {
            barColor: this.colors.byName('primary'),
            height: 20,
            barWidth: 3,
            barSpacing: 2
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: '#dddddd',
            spotColor: '#bbbbbb',
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.sparkOptions3 = {
            barColor: '#fff',
            height: 50,
            barWidth: 6,
            barSpacing: 6
        };
        this.sparkOptions4 = {
            barColor: this.colors.byName('primary'),
            height: 30,
            barWidth: 6,
            barSpacing: 6
        };
        // Bar chart
        // -----------------------------------
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }, {
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }
            ]
        };
        this.barColors = [
            {
                backgroundColor: this.colors.byName('info'),
                borderColor: this.colors.byName('info'),
                pointHoverBackgroundColor: this.colors.byName('info'),
                pointHoverBorderColor: this.colors.byName('info')
            }, {
                backgroundColor: this.colors.byName('primary'),
                borderColor: this.colors.byName('primary'),
                pointHoverBackgroundColor: this.colors.byName('primary'),
                pointHoverBorderColor: this.colors.byName('primary')
            }
        ];
        this.barOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
    }
    ActivityReportsComponent.prototype.ngOnInit = function () {
    };
    // random values for demo
    ActivityReportsComponent.prototype.rFactor = function () {
        return Math.round(Math.random() * 100);
    };
    ;
    return ActivityReportsComponent;
}());
ActivityReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activity-reports',
        template: __webpack_require__(1013),
        styles: [__webpack_require__(964)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object])
], ActivityReportsComponent);

var _a;
//# sourceMappingURL=activity-reports.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_colors_colors_service__ = __webpack_require__(450);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DasboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DasboardComponent = (function () {
    function DasboardComponent(colors, http) {
        var _this = this;
        this.colors = colors;
        this.http = http;
        this.easyPiePercent = 70;
        this.pieOptions = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('info'),
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
        this.sparkOptions1 = {
            barColor: this.colors.byName('info'),
            height: 30,
            barWidth: '5',
            barSpacing: '2'
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: this.colors.byName('purple'),
            spotColor: '#888',
            minSpotColor: this.colors.byName('purple'),
            maxSpotColor: this.colors.byName('purple'),
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.splineHeight = 280;
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        http.get('assets/server/chart/spline.json').map(function (data) { return data.json(); }).subscribe(function (data) { return _this.splineData = data; });
    }
    DasboardComponent.prototype.ngOnInit = function () { };
    DasboardComponent.prototype.colorByName = function (name) {
        return this.colors.byName(name);
    };
    return DasboardComponent;
}());
DasboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dasboard',
        template: __webpack_require__(1014),
        styles: [__webpack_require__(965)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], DasboardComponent);

var _a, _b;
//# sourceMappingURL=dasboard.component.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentLibraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentLibraryComponent = (function () {
    function DocumentLibraryComponent() {
        this.keywords = ['roofing'];
    }
    DocumentLibraryComponent.prototype.ngOnInit = function () {
    };
    return DocumentLibraryComponent;
}());
DocumentLibraryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-document-library',
        template: __webpack_require__(1015),
        styles: [__webpack_require__(966)]
    }),
    __metadata("design:paramtypes", [])
], DocumentLibraryComponent);

//# sourceMappingURL=document-library.component.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturedProductsComponent = (function () {
    function FeaturedProductsComponent() {
        this.image1 = {};
        this.image2 = {};
        this.image3 = {};
        this.image4 = {};
        this.banner1 = {};
        this.banner2 = {};
        this.banner3 = {};
        this.banner4 = {};
        this.catagory1 = {};
        this.catagory2 = {};
        this.catagory3 = {};
        this.catagory4 = {};
        this.product1Data = {
            product1Image: '',
            product1name: '',
            product1desc: ''
        };
        this.product2Data = {
            product2Image: '',
            product2name: '',
            product2desc: ''
        };
        this.product3Data = {
            product3Image: '',
            product3name: '',
            product3desc: ''
        };
        this.product4Data = {
            product4Image: '',
            product4name: '',
            product4desc: ''
        };
        this.banner1Data = {
            banner1Image: '',
            banner1name: '',
            banner1desc: ''
        };
        this.banner2Data = {
            banner2Image: '',
            banner2name: '',
            banner2desc: ''
        };
        this.banner3Data = {
            banner3Image: '',
            banner3name: '',
            banner3desc: ''
        };
        this.banner4Data = {
            banner4Image: '',
            banner4name: '',
            banner4desc: ''
        };
        this.catagory1Data = {
            catagory1Image: '',
            catagory1name: '',
            catagory1desc: ''
        };
        this.catagory2Data = {
            catagory2Image: '',
            catagory2name: '',
            catagory2desc: ''
        };
        this.catagory3Data = {
            catagory3Image: '',
            catagory3name: '',
            catagory3desc: ''
        };
        this.catagory4Data = {
            catagory4Image: '',
            catagory4name: '',
            catagory4desc: ''
        };
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () {
    };
    FeaturedProductsComponent.prototype.product1ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image1.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.product2ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image2.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.product3ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image3.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.product4ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image4.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.saveProduct1Data = function () {
        this.product1Data.product1Image = this.image1.src;
    };
    FeaturedProductsComponent.prototype.saveProduct2Data = function () {
        this.product2Data.product2Image = this.image2.src;
    };
    FeaturedProductsComponent.prototype.saveProduct3Data = function () {
        this.product3Data.product3Image = this.image3.src;
    };
    FeaturedProductsComponent.prototype.saveProduct4Data = function () {
        this.product4Data.product4Image = this.image4.src;
    };
    FeaturedProductsComponent.prototype.banner1ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.banner1.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.banner2ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.banner2.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.banner3ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.banner3.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.banner4ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.banner4.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.saveBanner1Data = function () {
        this.banner1Data.banner1Image = this.banner1.src;
    };
    FeaturedProductsComponent.prototype.saveBanner2Data = function () {
        this.banner2Data.banner2Image = this.banner2.src;
    };
    FeaturedProductsComponent.prototype.saveBanner3Data = function () {
        this.banner3Data.banner3Image = this.banner3.src;
    };
    FeaturedProductsComponent.prototype.saveBanner4Data = function () {
        this.banner4Data.banner4Image = this.banner4.src;
    };
    FeaturedProductsComponent.prototype.catagory1ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.catagory1.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.catagory2ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.catagory2.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.catagory3ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.catagory3.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.catagory4ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.catagory4.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.savecatagory1Data = function () {
        this.catagory1Data.catagory1Image = this.catagory1.src;
    };
    FeaturedProductsComponent.prototype.savecatagory2Data = function () {
        this.catagory2Data.catagory2Image = this.catagory2.src;
    };
    FeaturedProductsComponent.prototype.savecatagory3Data = function () {
        this.catagory3Data.catagory3Image = this.catagory3.src;
        console.log(this.catagory3Data);
    };
    FeaturedProductsComponent.prototype.savecatagory4Data = function () {
        this.catagory4Data.catagory4Image = this.catagory4.src;
    };
    return FeaturedProductsComponent;
}());
FeaturedProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-featured-products',
        template: __webpack_require__(1016),
        styles: [__webpack_require__(967)]
    }),
    __metadata("design:paramtypes", [])
], FeaturedProductsComponent);

//# sourceMappingURL=featured-products.component.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(1017),
        styles: [__webpack_require__(968)]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__ = __webpack_require__(450);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesReportsComponent = (function () {
    function SalesReportsComponent(colors) {
        this.colors = colors;
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        this.sparkOptions1 = {
            barColor: this.colors.byName('primary'),
            height: 20,
            barWidth: 3,
            barSpacing: 2
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: '#dddddd',
            spotColor: '#bbbbbb',
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.sparkOptions3 = {
            barColor: '#fff',
            height: 50,
            barWidth: 6,
            barSpacing: 6
        };
        this.sparkOptions4 = {
            barColor: this.colors.byName('primary'),
            height: 30,
            barWidth: 6,
            barSpacing: 6
        };
    }
    SalesReportsComponent.prototype.ngOnInit = function () {
    };
    return SalesReportsComponent;
}());
SalesReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sales-reports',
        template: __webpack_require__(1019),
        styles: [__webpack_require__(970)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object])
], SalesReportsComponent);

var _a;
//# sourceMappingURL=sales-reports.component.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSettingsComponent; });
/* unused harmony export appNameInterface */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThemeSettingsComponent = (function () {
    function ThemeSettingsComponent(settings, themes, SettingService, router) {
        this.settings = settings;
        this.themes = themes;
        this.SettingService = SettingService;
        this.router = router;
        this.image = {};
        this.icon = {};
        this.data = {
            name: ''
        };
        // this.selectedLanguage = this.getLangs()[0].code;
    }
    ThemeSettingsComponent.prototype.ngOnInit = function () {
    };
    ThemeSettingsComponent.prototype.setTheme = function () {
        localStorage.setItem('currentTheme', this.currentTheme);
        this.themes.setTheme(this.currentTheme);
        // this.SettingService.url = 'http://localhost:4200/src/app/shared/data.json';
        // this.SettingService.data = this.currentTheme;
        // this.SettingService.postData().subscribe(res => {
        // });    
    };
    ThemeSettingsComponent.prototype.logoUploadBase64 = function ($event) {
        // let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image.src = loadEvent.target.result;
            // that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    ThemeSettingsComponent.prototype.saveLogo = function () {
        localStorage.setItem('logo', this.image.src);
        //this.themes.setLogo(this.image.src);
        this.router.navigate(['/dashboard']);
    };
    ThemeSettingsComponent.prototype.IconUploadBase64 = function ($eve) {
        var file = $eve.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.icon.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    ThemeSettingsComponent.prototype.saveLogoIcon = function () {
        localStorage.setItem('logoIcon', this.icon.src);
        console.log(this.icon.src);
    };
    ThemeSettingsComponent.prototype.saveAppName = function (data) {
        localStorage.setItem('appName', data.name);
        // data.resetForm();
    };
    return ThemeSettingsComponent;
}());
ThemeSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-theme-settings',
        template: __webpack_require__(1020),
        styles: [__webpack_require__(971)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ThemeSettingsComponent);

var appNameInterface = (function () {
    function appNameInterface() {
    }
    return appNameInterface;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=theme-settings.component.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_table_data__ = __webpack_require__(943);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent() {
        // angular2-datatable
        // http.get('assets/server/datatable.json')
        //     .subscribe((data) => {
        //         setTimeout(() => {
        //             this.singleData = data.json();
        //         }, 1000);
        //     });
        // angular2-datatable
        // public sortByWordLength = (a: any) => {
        //     return a.name.length;
        // }
        // public removeItem(item: any) {
        //     this.singleData = _.filter(this.singleData, (elem) => elem != item);
        //     console.log('Remove: ', item.email);
        // }
        // ng2Table
        this.rows = [];
        this.columns = [
            { title: 'Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' } },
            {
                title: 'Company Name',
                name: 'position',
                sort: false,
                filtering: { filterString: '', placeholder: 'Filter by Company' }
            },
            { title: 'location', className: ['office-header', 'text-success'], name: 'office', sort: 'asc' },
            { title: 'Mobile', name: 'ext', sort: '', filtering: { filterString: '', placeholder: 'Filter by mobile.' } },
            { title: 'Registered On', className: 'text-warning', name: 'startDate' },
            { title: 'Pin Code', name: 'salary' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered', 'mb0', 'd-table-fixed'] // mb0=remove margin -/- .d-table-fixed=fix column width
        };
        this.ng2TableData = __WEBPACK_IMPORTED_MODULE_1__ng2_table_data__["a" /* TableData */];
        // ng2Table
        this.length = this.ng2TableData.length;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    UsersListComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.ng2TableData; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    UsersListComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    UsersListComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    UsersListComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.ng2TableData, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    UsersListComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-list',
        template: __webpack_require__(1021),
        styles: [__webpack_require__(972)]
    }),
    __metadata("design:paramtypes", [])
], UsersListComponent);

//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.showModal = function (value) {
        console.log(value);
        //this.modal.show();
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lgModal'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "modal", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(1022),
        styles: [__webpack_require__(973)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserblockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserblockService = (function () {
    function UserblockService() {
        // initially visible
        this.userBlockVisible = true;
    }
    UserblockService.prototype.getVisibility = function () {
        return this.userBlockVisible;
    };
    UserblockService.prototype.setVisibility = function (stat) {
        if (stat === void 0) { stat = true; }
        this.userBlockVisible = stat;
    };
    UserblockService.prototype.toggleVisibility = function () {
        this.userBlockVisible = !this.userBlockVisible;
    };
    return UserblockService;
}());
UserblockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserblockService);

//# sourceMappingURL=userblock.service.js.map

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var file_uploader_class_1 = __webpack_require__(907);
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(906);
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var file_uploader_class_1 = __webpack_require__(907);
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
            // todo
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropperDrawSettings; });
var CropperDrawSettings = (function () {
    function CropperDrawSettings() {
        this.strokeWidth = 1;
        this.strokeColor = 'rgba(255,255,255,1)';
        this.dragIconStrokeWidth = 1;
        this.dragIconStrokeColor = 'rgba(0,0,0,1)';
        this.dragIconFillColor = 'rgba(255,255,255,1)';
    }
    return CropperDrawSettings;
}());

//# sourceMappingURL=cropperDrawSettings.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_bounds__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_imageCropperModel__ = __webpack_require__(1008);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_pointPool__ = __webpack_require__(910);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropper; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var ImageCropper = (function (_super) {
    __extends(ImageCropper, _super);
    function ImageCropper(cropperSettings) {
        var _this = _super.call(this) || this;
        var x = 0;
        var y = 0;
        var width = cropperSettings.width;
        var height = cropperSettings.height;
        var keepAspect = cropperSettings.keepAspect;
        var touchRadius = cropperSettings.touchRadius;
        var minWidth = cropperSettings.minWidth;
        var minHeight = cropperSettings.minHeight;
        var croppedWidth = cropperSettings.croppedWidth;
        var croppedHeight = cropperSettings.croppedHeight;
        _this.cropperSettings = cropperSettings;
        _this.crop = _this;
        _this.x = x;
        _this.y = y;
        if (width === void 0) {
            _this.width = 100;
        }
        if (height === void 0) {
            _this.height = 50;
        }
        if (keepAspect === void 0) {
            _this.keepAspect = true;
        }
        if (touchRadius === void 0) {
            _this.touchRadius = 20;
        }
        _this.minWidth = minWidth;
        _this.minHeight = minHeight;
        _this.keepAspect = false;
        _this.aspectRatio = 0;
        _this.currentDragTouches = [];
        _this.isMouseDown = false;
        _this.ratioW = 1;
        _this.ratioH = 1;
        _this.fileType = cropperSettings.fileType;
        _this.imageSet = false;
        _this.pointPool = new __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */](200);
        _this.tl = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x, y, touchRadius, _this.cropperSettings);
        _this.tr = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x + width, y, touchRadius, _this.cropperSettings);
        _this.bl = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x, y + height, touchRadius, _this.cropperSettings);
        _this.br = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x + width, y + height, touchRadius, _this.cropperSettings);
        _this.tl.addHorizontalNeighbour(_this.tr);
        _this.tl.addVerticalNeighbour(_this.bl);
        _this.tr.addHorizontalNeighbour(_this.tl);
        _this.tr.addVerticalNeighbour(_this.br);
        _this.bl.addHorizontalNeighbour(_this.br);
        _this.bl.addVerticalNeighbour(_this.tl);
        _this.br.addHorizontalNeighbour(_this.bl);
        _this.br.addVerticalNeighbour(_this.tr);
        _this.markers = [_this.tl, _this.tr, _this.bl, _this.br];
        _this.center = new __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__["a" /* DragMarker */](x + (width / 2), y + (height / 2), touchRadius, _this.cropperSettings);
        _this.keepAspect = keepAspect;
        _this.aspectRatio = height / width;
        _this.croppedImage = new Image();
        _this.currentlyInteracting = false;
        _this.cropWidth = croppedWidth;
        _this.cropHeight = croppedHeight;
        return _this;
    }
    ImageCropper.sign = function (x) {
        if (+x === x) {
            return (x === 0) ? x : (x > 0) ? 1 : -1;
        }
        return NaN;
    };
    ImageCropper.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(evt.clientX - rect.left, evt.clientY - rect.top);
    };
    ImageCropper.getTouchPos = function (canvas, touch) {
        var rect = canvas.getBoundingClientRect();
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(touch.clientX - rect.left, touch.clientY - rect.top);
    };
    ImageCropper.detectVerticalSquash = function (img) {
        var ih = img.height;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var imageData = ctx.getImageData(0, 0, 1, ih);
        if (imageData) {
            var data = imageData.data;
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                }
                else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        }
        else {
            return 1;
        }
    };
    ImageCropper.prototype.getDataUriMimeType = function (dataUri) {
        // Get a substring because the regex does not perform well on very large strings. Cater for optional charset. Length 50 shoould be enough.
        var dataUriSubstring = dataUri.substring(0, 50);
        var mimeType = 'image/png';
        // data-uri scheme
        // data:[<media type>][;charset=<character set>][;base64],<data>
        var regEx = RegExp(/^(data:)([\w\/\+]+);(charset=[\w-]+|base64).*,(.*)/gi);
        var matches = regEx.exec(dataUriSubstring);
        if (matches && matches[2]) {
            mimeType = matches[2];
            if (mimeType == 'image/jpg') {
                mimeType = 'image/jpeg';
            }
        }
        return mimeType;
    };
    ImageCropper.prototype.prepare = function (canvas) {
        this.buffer = document.createElement('canvas');
        this.cropCanvas = document.createElement('canvas');
        // todo get more reliable parent width value.
        var responsiveWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
        if (responsiveWidth > 0 && this.cropperSettings.dynamicSizing) {
            this.cropCanvas.width = responsiveWidth;
            this.buffer.width = responsiveWidth;
            canvas.width = responsiveWidth;
        }
        else {
            this.cropCanvas.width = this.cropWidth;
            this.buffer.width = canvas.width;
        }
        this.cropCanvas.height = this.cropHeight;
        this.buffer.height = canvas.height;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw(this.ctx);
    };
    ImageCropper.prototype.resizeCanvas = function (width, height, setImage) {
        if (setImage === void 0) { setImage = false; }
        this.canvas.width = this.cropCanvas.width = this.width = this.canvasWidth = this.buffer.width = width;
        this.canvas.height = this.cropCanvas.height = this.height = this.canvasHeight = this.buffer.height = height;
        if (setImage) {
            this.setImage(this.srcImage);
        }
    };
    ImageCropper.prototype.reset = function () {
        this.setImage(undefined);
    };
    ImageCropper.prototype.draw = function (ctx) {
        var bounds = this.getBounds();
        if (this.srcImage) {
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvasHeight / this.canvasWidth;
            var w = this.canvasWidth;
            var h = this.canvasHeight;
            if (canvasAspect > sourceAspect) {
                w = this.canvasWidth;
                h = this.canvasWidth * sourceAspect;
            }
            else {
                h = this.canvasHeight;
                w = this.canvasHeight / sourceAspect;
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            if (canvasAspect < sourceAspect) {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
            }
            else {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
            }
            this.buffer.getContext('2d')
                .drawImage(this.canvas, 0, 0, this.canvasWidth, this.canvasHeight);
            ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
            ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor; // 'rgba(255,228,0,1)';
            if (!this.cropperSettings.rounded) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                ctx.drawImage(this.buffer, bounds.left, bounds.top, Math.max(bounds.width, 1), Math.max(bounds.height, 1), bounds.left, bounds.top, bounds.width, bounds.height);
                ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
            else {
                ctx.beginPath();
                ctx.arc(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, bounds.width / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.stroke();
            }
            var marker = void 0;
            for (var i = 0; i < this.markers.length; i++) {
                marker = this.markers[i];
                marker.draw(ctx);
            }
            this.center.draw(ctx);
        }
        else {
            ctx.fillStyle = 'rgba(192,192,192,1)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    ImageCropper.prototype.dragCenter = function (x, y, marker) {
        var bounds = this.getBounds();
        var left = x - (bounds.width / 2);
        var right = x + (bounds.width / 2);
        var top = y - (bounds.height / 2);
        var bottom = y + (bounds.height / 2);
        if (right >= this.maxXClamp) {
            x = this.maxXClamp - bounds.width / 2;
        }
        if (left <= this.minXClamp) {
            x = bounds.width / 2 + this.minXClamp;
        }
        if (top < this.minYClamp) {
            y = bounds.height / 2 + this.minYClamp;
        }
        if (bottom >= this.maxYClamp) {
            y = this.maxYClamp - bounds.height / 2;
        }
        this.tl.moveX(x - (bounds.width / 2));
        this.tl.moveY(y - (bounds.height / 2));
        this.tr.moveX(x + (bounds.width / 2));
        this.tr.moveY(y - (bounds.height / 2));
        this.bl.moveX(x - (bounds.width / 2));
        this.bl.moveY(y + (bounds.height / 2));
        this.br.moveX(x + (bounds.width / 2));
        this.br.moveY(y + (bounds.height / 2));
        marker.setPosition(x, y);
    };
    ImageCropper.prototype.enforceMinSize = function (x, y, marker) {
        var xLength = x - marker.getHorizontalNeighbour().position.x;
        var yLength = y - marker.getVerticalNeighbour().position.y;
        var xOver = this.minWidth - Math.abs(xLength);
        var yOver = this.minHeight - Math.abs(yLength);
        if (xLength === 0 || yLength === 0) {
            x = marker.position.x;
            y = marker.position.y;
            return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
        }
        if (this.keepAspect) {
            if (xOver > 0 && (yOver / this.aspectRatio) > 0) {
                if (xOver > (yOver / this.aspectRatio)) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yLength < 0) {
                        y -= yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                    else {
                        y += yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                }
            }
            else {
                if (xOver > 0) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yOver > 0) {
                        if (yLength < 0) {
                            y -= yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                        else {
                            y += yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                    }
                }
            }
        }
        else {
            if (xOver > 0) {
                if (xLength < 0) {
                    x -= xOver;
                }
                else {
                    x += xOver;
                }
            }
            if (yOver > 0) {
                if (yLength < 0) {
                    y -= yOver;
                }
                else {
                    y += yOver;
                }
            }
        }
        if (x < this.minXClamp || x > this.maxXClamp || y < this.minYClamp || y > this.maxYClamp) {
            x = marker.position.x;
            y = marker.position.y;
        }
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
    };
    ImageCropper.prototype.dragCorner = function (x, y, marker) {
        var iX = 0;
        var iY = 0;
        var ax = 0;
        var ay = 0;
        var newHeight = 0;
        var newWidth = 0;
        var newY = 0;
        var newX = 0;
        var anchorMarker;
        var fold = 0;
        if (this.keepAspect) {
            anchorMarker = marker.getHorizontalNeighbour().getVerticalNeighbour();
            ax = anchorMarker.position.x;
            ay = anchorMarker.position.y;
            if (x <= anchorMarker.position.x) {
                if (y <= anchorMarker.position.y) {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold > 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold > 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
            }
            else {
                if (y <= anchorMarker.position.y) {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold < 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold < 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
            }
        }
        else {
            var min = this.enforceMinSize(x, y, marker);
            marker.move(min.x, min.y);
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
        }
        this.center.recalculatePosition(this.getBounds());
    };
    ImageCropper.prototype.getSide = function (a, b, c) {
        var n = ImageCropper.sign((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
        // TODO move the return of the pools to outside of this function
        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(a);
        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(c);
        return n;
    };
    ImageCropper.prototype.handleRelease = function (newCropTouch) {
        if (newCropTouch == null) {
            return;
        }
        var index = 0;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id) {
                this.currentDragTouches[k].dragHandle.setDrag(false);
                index = k;
            }
        }
        this.currentDragTouches.splice(index, 1);
        this.draw(this.ctx);
    };
    ImageCropper.prototype.handleMove = function (newCropTouch) {
        var matched = false;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id && this.currentDragTouches[k].dragHandle != null) {
                var dragTouch = this.currentDragTouches[k];
                var clampedPositions = this.clampPosition(newCropTouch.x - dragTouch.dragHandle.offset.x, newCropTouch.y - dragTouch.dragHandle.offset.y);
                newCropTouch.x = clampedPositions.x;
                newCropTouch.y = clampedPositions.y;
                __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(clampedPositions);
                if (dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */]) {
                    this.dragCorner(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                else {
                    this.dragCenter(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                this.currentlyInteracting = true;
                matched = true;
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setPressed(this.canvas);
                break;
            }
        }
        if (!matched) {
            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                if (marker.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = marker;
                    this.currentDragTouches.push(newCropTouch);
                    marker.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCorner(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                    break;
                }
            }
            if (newCropTouch.dragHandle === null || typeof newCropTouch.dragHandle === 'undefined') {
                if (this.center.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = this.center;
                    this.currentDragTouches.push(newCropTouch);
                    newCropTouch.dragHandle.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCenter(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                }
            }
        }
    };
    ImageCropper.prototype.updateClampBounds = function () {
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var canvasAspect = this.canvas.height / this.canvas.width;
        var w = this.canvas.width;
        var h = this.canvas.height;
        if (canvasAspect > sourceAspect) {
            w = this.canvas.width;
            h = this.canvas.width * sourceAspect;
        }
        else {
            h = this.canvas.height;
            w = this.canvas.height / sourceAspect;
        }
        this.minXClamp = this.canvas.width / 2 - w / 2;
        this.minYClamp = this.canvas.height / 2 - h / 2;
        this.maxXClamp = this.canvas.width / 2 + w / 2;
        this.maxYClamp = this.canvas.height / 2 + h / 2;
    };
    ImageCropper.prototype.getCropBounds = function () {
        var bounds = this.getBounds();
        bounds.top = Math.round((bounds.top - this.minYClamp) / this.ratioH);
        bounds.bottom = Math.round((bounds.bottom - this.minYClamp) / this.ratioH);
        bounds.left = Math.round((bounds.left - this.minXClamp) / this.ratioW);
        bounds.right = Math.round((bounds.right - this.minXClamp) / this.ratioW);
        return bounds;
    };
    ImageCropper.prototype.clampPosition = function (x, y) {
        if (x < this.minXClamp) {
            x = this.minXClamp;
        }
        if (x > this.maxXClamp) {
            x = this.maxXClamp;
        }
        if (y < this.minYClamp) {
            y = this.minYClamp;
        }
        if (y > this.maxYClamp) {
            y = this.maxYClamp;
        }
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
    };
    ImageCropper.prototype.isImageSet = function () {
        return this.imageSet;
    };
    ImageCropper.prototype.setImage = function (img) {
        this.srcImage = img;
        if (!img) {
            this.imageSet = false;
            this.draw(this.ctx);
        }
        else {
            this.imageSet = true;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var bufferContext = this.buffer.getContext('2d');
            bufferContext.clearRect(0, 0, this.buffer.width, this.buffer.height);
            if (!this.cropperSettings.fileType)
                this.fileType = this.getDataUriMimeType(img.src);
            if (this.cropperSettings.minWithRelativeToResolution) {
                this.minWidth = (this.canvas.width * this.minWidth / this.srcImage.width);
                this.minHeight = (this.canvas.height * this.minHeight / this.srcImage.height);
            }
            this.updateClampBounds();
            this.canvasWidth = this.canvas.width;
            this.canvasHeight = this.canvas.height;
            var cropPosition = this.getCropPositionFromMarkers();
            this.setCropPosition(cropPosition);
        }
    };
    ImageCropper.prototype.updateCropPosition = function (cropBounds) {
        var cropPosition = this.getCropPositionFromBounds(cropBounds);
        this.setCropPosition(cropPosition);
    };
    ImageCropper.prototype.setCropPosition = function (cropPosition) {
        this.tl.setPosition(cropPosition[0].x, cropPosition[0].y);
        this.tr.setPosition(cropPosition[1].x, cropPosition[1].y);
        this.bl.setPosition(cropPosition[2].x, cropPosition[2].y);
        this.br.setPosition(cropPosition[3].x, cropPosition[3].y);
        this.center.setPosition(cropPosition[4].x, cropPosition[4].y);
        for (var _i = 0, cropPosition_1 = cropPosition; _i < cropPosition_1.length; _i++) {
            var position = cropPosition_1[_i];
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(position);
        }
        this.vertSquashRatio = ImageCropper.detectVerticalSquash(this.srcImage);
        this.draw(this.ctx);
        this.croppedImage = this.getCroppedImage(this.cropWidth, this.cropHeight);
    };
    ImageCropper.prototype.getCropPositionFromMarkers = function () {
        var w = this.canvas.width;
        var h = this.canvas.height;
        var tlPos, trPos, blPos, brPos, center;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var cropBounds = this.getBounds();
        var cropAspect = cropBounds.height / cropBounds.width;
        var cX = this.canvas.width / 2;
        var cY = this.canvas.height / 2;
        if (cropAspect > sourceAspect) {
            var imageH = Math.min(w * sourceAspect, h);
            var cropW = imageH / cropAspect;
            tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - cropW / 2, cY + imageH / 2);
            trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + cropW / 2, cY + imageH / 2);
            blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - cropW / 2, cY - imageH / 2);
            brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + cropW / 2, cY - imageH / 2);
        }
        else {
            var imageW = Math.min(h / sourceAspect, w);
            var cropH = imageW * cropAspect;
            tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - imageW / 2, cY + cropH / 2);
            trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + imageW / 2, cY + cropH / 2);
            blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - imageW / 2, cY - cropH / 2);
            brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + imageW / 2, cY - cropH / 2);
        }
        center = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX, cY);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCropPositionFromBounds = function (cropPosition) {
        var marginTop = 0;
        var marginLeft = 0;
        var canvasAspect = this.canvasHeight / this.canvasWidth;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        if (canvasAspect > sourceAspect) {
            marginTop = this.buffer.height / 2 - (this.canvasWidth * sourceAspect) / 2;
        }
        else {
            marginLeft = this.buffer.width / 2 - (this.canvasHeight / sourceAspect) / 2;
        }
        var ratioW = (this.canvasWidth - marginLeft * 2) / this.srcImage.width;
        var ratioH = (this.canvasHeight - marginTop * 2) / this.srcImage.height;
        var actualH = cropPosition.height * ratioH;
        var actualW = cropPosition.width * ratioW;
        var actualX = cropPosition.left * ratioW + marginLeft;
        var actualY = cropPosition.top * ratioH + marginTop;
        if (this.keepAspect) {
            var scaledW = actualH / this.aspectRatio;
            var scaledH = actualW * this.aspectRatio;
            if (this.getCropBounds().height === cropPosition.height) {
                actualH = scaledH;
            }
            else if (this.getCropBounds().width === cropPosition.width) {
                actualW = scaledW;
            }
            else {
                if (Math.abs(scaledH - actualH) < Math.abs(scaledW - actualW)) {
                    actualW = scaledW;
                }
                else {
                    actualH = scaledH;
                }
            }
        }
        var tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX, actualY + actualH);
        var trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW, actualY + actualH);
        var blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX, actualY);
        var brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW, actualY);
        var center = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW / 2, actualY + actualH / 2);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    // todo: Unused parameters?
    ImageCropper.prototype.getCroppedImage = function (fillWidth, fillHeight) {
        var bounds = this.getBounds();
        if (!this.srcImage) {
            return document.createElement('img');
        }
        else {
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvas.height / this.canvas.width;
            var w = this.canvas.width;
            var h = this.canvas.height;
            if (canvasAspect > sourceAspect) {
                w = this.canvas.width;
                h = this.canvas.width * sourceAspect;
            }
            else {
                if (canvasAspect < sourceAspect) {
                    h = this.canvas.height;
                    w = this.canvas.height / sourceAspect;
                }
                else {
                    h = this.canvas.height;
                    w = this.canvas.width;
                }
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            var offsetH = (this.buffer.height - h) / 2 / this.ratioH;
            var offsetW = (this.buffer.width - w) / 2 / this.ratioW;
            var ctx = this.cropCanvas.getContext('2d');
            if (this.cropperSettings.preserveSize) {
                var width = Math.round(bounds.right / this.ratioW - bounds.left / this.ratioW);
                var height = Math.round(bounds.bottom / this.ratioH - bounds.top / this.ratioH);
                this.cropCanvas.width = width;
                this.cropCanvas.height = height;
                this.cropperSettings.croppedWidth = this.cropCanvas.width;
                this.cropperSettings.croppedHeight = this.cropCanvas.height;
            }
            ctx.clearRect(0, 0, this.cropCanvas.width, this.cropCanvas.height);
            this.drawImageIOSFix(ctx, this.srcImage, Math.max(Math.round((bounds.left) / this.ratioW - offsetW), 0), Math.max(Math.round(bounds.top / this.ratioH - offsetH), 0), Math.max(Math.round(bounds.width / this.ratioW), 1), Math.max(Math.round(bounds.height / this.ratioH), 1), 0, 0, this.cropCanvas.width, this.cropCanvas.height);
            if (this.cropperSettings.resampleFn) {
                this.cropperSettings.resampleFn(this.cropCanvas);
            }
            this.croppedImage.width = this.cropCanvas.width;
            this.croppedImage.height = this.cropCanvas.height;
            this.croppedImage.src = this.cropCanvas.toDataURL(this.fileType, this.cropperSettings.compressRatio);
            return this.croppedImage;
        }
    };
    ImageCropper.prototype.getBounds = function () {
        var minX = Number.MAX_VALUE;
        var minY = Number.MAX_VALUE;
        var maxX = -Number.MAX_VALUE;
        var maxY = -Number.MAX_VALUE;
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x < minX) {
                minX = marker.position.x;
            }
            if (marker.position.x > maxX) {
                maxX = marker.position.x;
            }
            if (marker.position.y < minY) {
                minY = marker.position.y;
            }
            if (marker.position.y > maxY) {
                maxY = marker.position.y;
            }
        }
        var bounds = new __WEBPACK_IMPORTED_MODULE_0__model_bounds__["a" /* Bounds */]();
        bounds.left = minX;
        bounds.right = maxX;
        bounds.top = minY;
        bounds.bottom = maxY;
        return bounds;
    };
    ImageCropper.prototype.setBounds = function (bounds) {
        var topLeft;
        var topRight;
        var bottomLeft;
        var bottomRight;
        var currentBounds = this.getBounds();
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x === currentBounds.left) {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.left, bounds.top);
                }
                else {
                    marker.setPosition(bounds.left, bounds.bottom);
                }
            }
            else {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.right, bounds.top);
                }
                else {
                    marker.setPosition(bounds.right, bounds.bottom);
                }
            }
        }
        this.center.recalculatePosition(bounds);
        this.center.draw(this.ctx);
        this.draw(this.ctx); // we need to redraw all canvas if we have changed bounds
    };
    ImageCropper.prototype.onTouchMove = function (event) {
        if (this.crop.isImageSet()) {
            event.preventDefault();
            if (event.touches.length === 1) {
                for (var i = 0; i < event.touches.length; i++) {
                    var touch = event.touches[i];
                    var touchPosition = ImageCropper.getTouchPos(this.canvas, touch);
                    var cropTouch = new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](touchPosition.x, touchPosition.y, touch.identifier);
                    __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(touchPosition);
                    this.move(cropTouch);
                }
            }
            else {
                if (event.touches.length === 2) {
                    var distance = ((event.touches[0].clientX - event.touches[1].clientX) * (event.touches[0].clientX - event.touches[1].clientX)) + ((event.touches[0].clientY - event.touches[1].clientY) * (event.touches[0].clientY - event.touches[1].clientY));
                    if (this.previousDistance && this.previousDistance !== distance) {
                        var increment = distance < this.previousDistance ? 1 : -1;
                        var bounds = this.getBounds();
                        bounds.top += increment;
                        bounds.left += increment;
                        bounds.right -= increment;
                        bounds.bottom -= increment;
                        this.setBounds(bounds);
                    }
                    this.previousDistance = distance;
                }
            }
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.onMouseMove = function (e) {
        if (this.crop.isImageSet() && this.isMouseDown) {
            var mousePosition = ImageCropper.getMousePos(this.canvas, e);
            this.move(new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](mousePosition.x, mousePosition.y, 0));
            var dragTouch = this.getDragTouchForID(0);
            if (dragTouch) {
                dragTouch.x = mousePosition.x;
                dragTouch.y = mousePosition.y;
            }
            else {
                dragTouch = new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](mousePosition.x, mousePosition.y, 0);
            }
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(mousePosition);
            this.drawCursors(dragTouch);
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.move = function (cropTouch) {
        if (this.isMouseDown) {
            this.handleMove(cropTouch);
        }
    };
    ImageCropper.prototype.getDragTouchForID = function (id) {
        for (var i = 0; i < this.currentDragTouches.length; i++) {
            if (id === this.currentDragTouches[i].id) {
                return this.currentDragTouches[i];
            }
        }
        return undefined;
    };
    ImageCropper.prototype.drawCursors = function (cropTouch) {
        var cursorDrawn = false;
        if (cropTouch != null) {
            if (cropTouch.dragHandle === this.center) {
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'move');
                cursorDrawn = true;
            }
            if (cropTouch.dragHandle !== null && cropTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */]) {
                this.drawCornerCursor(cropTouch.dragHandle, cropTouch.dragHandle.position.x, cropTouch.dragHandle.position.y);
                cursorDrawn = true;
            }
        }
        var didDraw = false;
        if (!cursorDrawn) {
            for (var i = 0; i < this.markers.length; i++) {
                didDraw = didDraw || this.drawCornerCursor(this.markers[i], cropTouch.x, cropTouch.y);
            }
            if (!didDraw) {
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'initial');
            }
        }
        if (!didDraw && !cursorDrawn && this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
            this.center.setOver(true);
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'move');
        }
        else {
            this.center.setOver(false);
        }
    };
    ImageCropper.prototype.drawCornerCursor = function (marker, x, y) {
        if (marker.touchInBounds(x, y)) {
            marker.setOver(true);
            if (marker.getHorizontalNeighbour().position.x > marker.position.x) {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nwse-resize');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nesw-resize');
                }
            }
            else {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nesw-resize');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nwse-resize');
                }
            }
            return true;
        }
        marker.setOver(false);
        return false;
    };
    // todo: Unused param
    ImageCropper.prototype.onTouchStart = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onTouchEnd = function (event) {
        if (this.crop.isImageSet()) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var dragTouch = this.getDragTouchForID(touch.identifier);
                if (dragTouch && dragTouch !== undefined) {
                    if (dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */] || dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__["a" /* DragMarker */]) {
                        dragTouch.dragHandle.setOver(false);
                    }
                    this.handleRelease(dragTouch);
                }
            }
            if (this.currentDragTouches.length === 0) {
                this.isMouseDown = false;
                this.currentlyInteracting = false;
            }
        }
    };
    // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    ImageCropper.prototype.drawImageIOSFix = function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Works only if whole image is displayed:
        // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        // The following works correct also when only a part of the image is displayed:
        // ctx.drawImage(img, sx * this.vertSquashRatio, sy * this.vertSquashRatio, sw * this.vertSquashRatio, sh *
        // this.vertSquashRatio, dx, dy, dw, dh);
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    ImageCropper.prototype.onMouseDown = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onMouseUp = function (event) {
        if (this.crop.isImageSet()) {
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setReleased(this.canvas);
            this.isMouseDown = false;
            this.handleRelease(new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](0, 0, 0));
        }
    };
    return ImageCropper;
}(__WEBPACK_IMPORTED_MODULE_4__model_imageCropperModel__["a" /* ImageCropperModel */]));

//# sourceMappingURL=imageCropper.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageCropper__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cropperSettings__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exif__ = __webpack_require__(1002);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_cropPosition__ = __webpack_require__(939);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperComponent; });





var ImageCropperComponent = (function () {
    function ImageCropperComponent(renderer) {
        this.cropPositionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.renderer = renderer;
    }
    ImageCropperComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var canvas = this.cropcanvas.nativeElement;
        if (!this.settings) {
            this.settings = new __WEBPACK_IMPORTED_MODULE_2__cropperSettings__["a" /* CropperSettings */]();
        }
        this.renderer.setElementAttribute(canvas, 'class', this.settings.cropperClass);
        if (!this.settings.dynamicSizing) {
            this.renderer.setElementAttribute(canvas, 'width', this.settings.canvasWidth.toString());
            this.renderer.setElementAttribute(canvas, 'height', this.settings.canvasHeight.toString());
        }
        else {
            window.addEventListener('resize', function () {
                _this.settings.canvasWidth = canvas.offsetWidth;
                _this.settings.canvasHeight = canvas.offsetHeight;
                _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, true);
            });
        }
        if (!this.cropper) {
            this.cropper = new __WEBPACK_IMPORTED_MODULE_1__imageCropper__["a" /* ImageCropper */](this.settings);
        }
        this.cropper.prepare(canvas);
    };
    ImageCropperComponent.prototype.ngOnChanges = function (changes) {
        if (this.isCropPositionChanged(changes)) {
            this.cropper.updateCropPosition(this.cropPosition.toBounds());
            if (this.cropper.isImageSet()) {
                var bounds = this.cropper.getCropBounds();
                this.image.image = this.cropper.getCroppedImage().src;
                this.onCrop.emit(bounds);
            }
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onTouchMove = function (event) {
        this.cropper.onTouchMove(event);
    };
    ImageCropperComponent.prototype.onTouchStart = function (event) {
        this.cropper.onTouchStart(event);
    };
    ImageCropperComponent.prototype.onTouchEnd = function (event) {
        this.cropper.onTouchEnd(event);
        if (this.cropper.isImageSet()) {
            this.image.image = this.cropper.getCroppedImage().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseDown = function (event) {
        this.cropper.onMouseDown(event);
    };
    ImageCropperComponent.prototype.onMouseUp = function (event) {
        if (this.cropper.isImageSet()) {
            this.cropper.onMouseUp(event);
            this.image.image = this.cropper.getCroppedImage().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseMove = function (event) {
        this.cropper.onMouseMove(event);
    };
    ImageCropperComponent.prototype.fileChangeListener = function ($event) {
        if ($event.target.files.length === 0)
            return;
        var file = $event.target.files[0];
        if (this.settings.allowedFilesRegex.test(file.name)) {
            var image_1 = new Image();
            var fileReader = new FileReader();
            var that_1 = this;
            fileReader.addEventListener('loadend', function (loadEvent) {
                image_1.src = loadEvent.target.result;
                that_1.setImage(image_1);
            });
            fileReader.readAsDataURL(file);
        }
    };
    ImageCropperComponent.prototype.reset = function () {
        this.cropper.reset();
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass);
        this.image.image = this.cropper.getCroppedImage().src;
    };
    ImageCropperComponent.prototype.setImage = function (image, newBounds) {
        var _this = this;
        if (newBounds === void 0) { newBounds = null; }
        var self = this;
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass + " " + this.settings.croppingClass);
        this.intervalRef = window.setInterval(function () {
            if (self.intervalRef) {
                clearInterval(self.intervalRef);
            }
            if (image.naturalHeight > 0 && image.naturalWidth > 0) {
                image.height = image.naturalHeight;
                image.width = image.naturalWidth;
                clearInterval(self.intervalRef);
                self.getOrientedImage(image, function (img) {
                    if (_this.settings.dynamicSizing) {
                        var canvas = _this.cropcanvas.nativeElement;
                        _this.settings.canvasWidth = canvas.offsetWidth;
                        _this.settings.canvasHeight = canvas.offsetHeight;
                        _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, false);
                    }
                    self.cropper.setImage(img);
                    if (self.cropPosition && self.cropPosition.isInitialized()) {
                        self.cropper.updateCropPosition(self.cropPosition.toBounds());
                    }
                    self.image.original = img;
                    var bounds = self.cropper.getCropBounds();
                    self.image.image = self.cropper.getCroppedImage().src;
                    if (newBounds != null) {
                        bounds = newBounds;
                        self.cropper.setBounds(bounds);
                    }
                    self.onCrop.emit(bounds);
                });
            }
        }, 10);
    };
    ImageCropperComponent.prototype.isCropPositionChanged = function (changes) {
        if (this.cropper && changes['cropPosition'] && this.isCropPositionUpdateNeeded) {
            return true;
        }
        else {
            this.isCropPositionUpdateNeeded = true;
            return false;
        }
    };
    ImageCropperComponent.prototype.updateCropBounds = function () {
        var cropBound = this.cropper.getCropBounds();
        this.cropPositionChange.emit(new __WEBPACK_IMPORTED_MODULE_4__model_cropPosition__["a" /* CropPosition */](cropBound.left, cropBound.top, cropBound.width, cropBound.height));
        this.isCropPositionUpdateNeeded = false;
    };
    ImageCropperComponent.prototype.getOrientedImage = function (image, callback) {
        var img;
        __WEBPACK_IMPORTED_MODULE_3__exif__["a" /* Exif */].getData(image, function () {
            var orientation = __WEBPACK_IMPORTED_MODULE_3__exif__["a" /* Exif */].getTag(image, 'Orientation');
            if ([3, 6, 8].indexOf(orientation) > -1) {
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), cw = image.width, ch = image.height, cx = 0, cy = 0, deg = 0;
                switch (orientation) {
                    case 3:
                        cx = -image.width;
                        cy = -image.height;
                        deg = 180;
                        break;
                    case 6:
                        cw = image.height;
                        ch = image.width;
                        cy = -image.height;
                        deg = 90;
                        break;
                    case 8:
                        cw = image.height;
                        ch = image.width;
                        cx = -image.width;
                        deg = 270;
                        break;
                    default:
                        break;
                }
                canvas.width = cw;
                canvas.height = ch;
                ctx.rotate(deg * Math.PI / 180);
                ctx.drawImage(image, cx, cy);
                img = document.createElement('img');
                img.width = cw;
                img.height = ch;
                img.addEventListener('load', function () {
                    callback(img);
                });
                img.src = canvas.toDataURL('image/png');
            }
            else {
                img = image;
                callback(img);
            }
        });
    };
    return ImageCropperComponent;
}());

ImageCropperComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'img-cropper',
                template: "\n        <span class=\"ng2-imgcrop\">\n          <input *ngIf=\"!settings.noFileInput\" type=\"file\" accept=\"image/*\" (change)=\"fileChangeListener($event)\">\n          <canvas #cropcanvas\n                  (mousedown)=\"onMouseDown($event)\"\n                  (mouseup)=\"onMouseUp($event)\"\n                  (mousemove)=\"onMouseMove($event)\"\n                  (mouseleave)=\"onMouseUp($event)\"\n                  (touchmove)=\"onTouchMove($event)\"\n                  (touchend)=\"onTouchEnd($event)\"\n                  (touchstart)=\"onTouchStart($event)\">\n          </canvas>\n        </span>\n      "
            },] },
];
/** @nocollapse */
ImageCropperComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
ImageCropperComponent.propDecorators = {
    'cropcanvas': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['cropcanvas', undefined,] },],
    'settings': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['settings',] },],
    'image': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['image',] },],
    'cropper': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'cropPosition': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'cropPositionChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onCrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=imageCropperComponent.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bounds__ = __webpack_require__(909);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropPosition; });

var CropPosition = (function () {
    function CropPosition(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = +x;
        this.y = +y;
        this.w = +w;
        this.h = +h;
    }
    CropPosition.prototype.toBounds = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__bounds__["a" /* Bounds */](this.x, this.y, this.w, this.h);
    };
    CropPosition.prototype.isInitialized = function () {
        return this.x !== 0 && this.y !== 0 && this.w !== 0 && this.h !== 0;
    };
    return CropPosition;
}());

//# sourceMappingURL=cropPosition.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cropperSettings__ = __webpack_require__(908);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Handle; });


var Handle = (function () {
    function Handle(x, y, radius, settings) {
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_1__cropperSettings__["a" /* CropperSettings */]();
        this.over = false;
        this.drag = false;
        this._position = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](x, y);
        this.offset = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        this.radius = radius;
        this.cropperSettings = settings;
    }
    Handle.prototype.setDrag = function (value) {
        this.drag = value;
        this.setOver(value);
    };
    Handle.prototype.draw = function (ctx) {
        // this should't be empty
    };
    Handle.prototype.setOver = function (over) {
        this.over = over;
    };
    Handle.prototype.touchInBounds = function (x, y) {
        return (x > this.position.x - this.radius + this.offset.x) &&
            (x < this.position.x + this.radius + this.offset.x) &&
            (y > this.position.y - this.radius + this.offset.y) &&
            (y < this.position.y + this.radius + this.offset.y);
    };
    Object.defineProperty(Handle.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Handle.prototype.setPosition = function (x, y) {
        this._position.x = x;
        this._position.y = y;
    };
    return Handle;
}());

//# sourceMappingURL=handle.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (p) {
            this._next = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        set: function (p) {
            this._prev = p;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(1018),
        styles: [__webpack_require__(969)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableData; });
var TableData = [
    {
        'name': 'Victoria Cantrell',
        'position': 'Integer Corporation',
        'office': 'Croatia',
        'ext': "<strong>0839083923</strong>",
        'startDate': '2015/08/19',
        'salary': 208178
    }, {
        'name': 'Pearl Crosby',
        'position': 'In PC',
        'office': 'Cambodia',
        'ext': "<strong>8262826223</strong>",
        'startDate': '2014/10/08',
        'salary': 114367
    }, {
        'name': 'Colette Foley',
        'position': 'Lorem Inc.',
        'office': 'Korea, North',
        'ext': '8968896823',
        'startDate': '2015/07/19',
        'salary': 721473
    }, {
        'name': 'Anastasia Shaffer',
        'position': 'Dolor Nulla Semper LLC',
        'office': 'Suriname',
        'ext': '7980896823',
        'startDate': '2015/04/20',
        'salary': 264620
    }, {
        'name': 'Gabriel Castro',
        'position': 'Sed Limited',
        'office': 'Bahrain',
        'ext': '9757896834',
        'startDate': '2015/03/04',
        'salary': 651350
    }, {
        'name': 'Cherokee Ware',
        'position': 'Tincidunt LLC',
        'office': 'United Kingdom (Great Britain)',
        'ext': '9995896823',
        'startDate': '2015/06/17',
        'salary': 666259
    }, {
        'name': 'Barry Moss',
        'position': 'Sociis Industries',
        'office': 'Western Sahara',
        'ext': '9697896834',
        'startDate': '2015/08/13',
        'salary': 541631
    }, {
        'name': 'Maryam Tucker',
        'position': 'Elit Pede Malesuada Inc.',
        'office': 'Brazil',
        'ext': '9203896845',
        'startDate': '2014/10/02',
        'salary': 182294
    }, {
        'name': 'Constance Clayton',
        'position': 'Auctor Velit Aliquam LLP',
        'office': 'United Arab Emirates',
        'ext': '904896823',
        'startDate': '2015/08/01',
        'salary': 218597
    }, {
        'name': 'Rogan Tucker',
        'position': 'Arcu Vestibulum Ante Associates',
        'office': 'Jersey',
        'ext': '908858968',
        'startDate': '2015/01/04',
        'salary': 861632
    }, {
        'name': 'Emery Mcdowell',
        'position': 'Gravida Company',
        'office': 'New Zealand',
        'ext': '9351834968',
        'startDate': '2015/06/02',
        'salary': 413568
    }, {
        'name': 'Yael Greer',
        'position': 'Orci Limited',
        'office': 'Madagascar',
        'ext': '9929731416',
        'startDate': '2014/12/04',
        'salary': 121831
    }, {
        'name': 'Jared Burgess',
        'position': 'Auctor Incorporated',
        'office': 'Burundi',
        'ext': '9929734673',
        'startDate': '2015/01/12',
        'salary': 62243
    }, {
        'name': 'Rama Waller',
        'position': 'Sem Pellentesque LLC',
        'office': 'Andorra',
        'ext': '9929732973',
        'startDate': '2014/12/01',
        'salary': 223227
    }
];
//# sourceMappingURL=ng2-table-data.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_theme_settings_theme_settings_component__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sales_reports_sales_reports_component__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_activity_reports_activity_reports_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dasboard_dasboard_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_page_home_page_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_featured_products_featured_products_component__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_users_list_users_list_component__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_document_library_document_library_component__ = __webpack_require__(913);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        children: [
            //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_dasboard_dasboard_component__["a" /* DasboardComponent */] },
            { path: 'themesettings', component: __WEBPACK_IMPORTED_MODULE_3__components_theme_settings_theme_settings_component__["a" /* ThemeSettingsComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_dasboard_dasboard_component__["a" /* DasboardComponent */] },
            { path: 'salesreports', component: __WEBPACK_IMPORTED_MODULE_4__components_sales_reports_sales_reports_component__["a" /* SalesReportsComponent */] },
            { path: 'activityreports', component: __WEBPACK_IMPORTED_MODULE_5__components_activity_reports_activity_reports_component__["a" /* ActivityReportsComponent */] },
            { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_7__components_home_page_home_page_component__["a" /* HomePageComponent */] },
            { path: 'featuredproducts', component: __WEBPACK_IMPORTED_MODULE_8__components_featured_products_featured_products_component__["a" /* FeaturedProductsComponent */] },
            { path: 'userslist', component: __WEBPACK_IMPORTED_MODULE_9__components_users_list_users_list_component__["a" /* UsersListComponent */] },
            { path: 'documentslibrary', component: __WEBPACK_IMPORTED_MODULE_10__components_document_library_document_library_component__["a" /* DocumentLibraryComponent */] },
        ]
    },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var site = {
    text: 'Site Settings',
    link: '/dashboard/themesettings',
    icon: 'icon-settings'
};
var Home = {
    text: 'Dashboard',
    link: '/dashboard/dashboard',
    icon: 'icon-home'
};
var Sales = {
    text: 'Sales Reports',
    link: '/dashboard/salesreports',
    icon: 'fa fa-inr'
};
var activityreports = {
    text: 'Activity Reports',
    link: '/dashboard/activityreports',
    icon: 'fa fa-bar-chart'
};
var featuredProducts = {
    text: 'Featured Products',
    link: '/dashboard/featuredproducts',
    icon: 'fa fa-product-hunt'
};
var userslist = {
    text: 'Users List',
    link: '/dashboard/userslist',
    icon: 'fa fa-users'
};
var docusLibrary = {
    text: 'Documents Library',
    link: '/dashboard/documentslibrary',
    icon: 'fa fa-file-text'
};
// const Dashboard = {
//     text: 'Dashboard',
//     link: '/dashboard',
//     icon: 'icon-speedometer',
//     submenu: [
//         {
//             text: 'Dashbord v1',
//             link: '/dashboard/v1'
//         },
//         {
//             text: 'Dashbord v2',
//             link: '/dashboard/v2'
//         },
//         {
//             text: 'Dashbord v3',
//             link: '/dashboard/v3'
//         }
//     ]
// };
// const Widgets = {
//     text: 'Widgets',
//     link: '/widgets',
//     icon: 'icon-grid'
// };
// const Elements = {
//     text: 'Elements',
//     link: '/elements',
//     icon: 'icon-chemistry',
//     submenu: [
//         {
//             text: 'Buttons',
//             link: '/elements/buttons'
//         },
//         {
//             text: 'Interaction',
//             link: '/elements/interaction'
//         },
//         {
//             text: 'Notification',
//             link: '/elements/notification'
//         },
//         {
//             text: 'SweetAlert',
//             link: '/elements/sweetalert'
//         },
//         {
//             text: 'Spinners',
//             link: '/elements/spinners'
//         },
//         {
//             text: 'Dropdown',
//             link: '/elements/dropdown'
//         },
//         {
//             text: 'Nav Tree',
//             link: '/elements/navtree'
//         },
//         {
//             text: 'Sortable',
//             link: '/elements/sortable'
//         },
//         {
//             text: 'Grid',
//             link: '/elements/grid'
//         },
//         {
//             text: 'Grid Masonry',
//             link: '/elements/gridmasonry'
//         },
//         {
//             text: 'Typography',
//             link: '/elements/typography'
//         },
//         {
//             text: 'Font Icons',
//             link: '/elements/iconsfont'
//         },
//         {
//             text: 'Weahter Icons',
//             link: '/elements/iconsweather'
//         },
//         {
//             text: 'Colors',
//             link: '/elements/colors'
//         },
//         {
//             text: 'Infinite Scroll',
//             link: '/elements/infinitescroll'
//         }
//     ]
// };
// const Forms = {
//     text: 'Forms',
//     link: '/forms',
//     icon: 'icon-note',
//     submenu: [
//         {
//             text: 'Standard',
//             link: '/forms/standard'
//         },
//         {
//             text: 'Extended',
//             link: '/forms/extended'
//         },
//         {
//             text: 'Validation',
//             link: '/forms/validation'
//         },
//         {
//             text: 'Upload',
//             link: '/forms/upload'
//         },
//         {
//             text: 'Image Crop',
//             link: '/forms/cropper'
//         }
//     ]
// };
// const Charts = {
//     text: 'Charts',
//     link: '/charts',
//     icon: 'icon-graph',
//     submenu: [
//         {
//             text: 'Flot',
//             link: '/charts/flot'
//         },
//         {
//             text: 'Radial',
//             link: '/charts/radial'
//         },
//         {
//             text: 'ChartJS',
//             link: '/charts/chartjs'
//         }
//     ]
// };
// const Tables = {
//     text: 'Tables',
//     link: '/tables',
//     icon: 'icon-grid',
//     submenu: [
//         {
//             text: 'Standard',
//             link: '/tables/standard'
//         },
//         {
//             text: 'Extended',
//             link: '/tables/extended'
//         },
//         {
//             text: 'Data-Tables',
//             link: '/tables/datatable'
//         },
//         {
//             text: 'Angular Grid',
//             link: '/tables/aggrid'
//         }
//     ]
// };
// const Maps = {
//     text: 'Maps',
//     link: '/maps',
//     icon: 'icon-map',
//     submenu: [
//         {
//             text: 'Google',
//             link: '/maps/google'
//         },
//         {
//             text: 'Vector',
//             link: '/maps/vector'
//         }
//     ]
// };
// const Pages = {
//     text: 'Pages',
//     link: '/pages',
//     icon: 'icon-doc',
//     submenu: [
//         {
//             text: 'Login',
//             link: '/login'
//         },
//         {
//             text: 'Register',
//             link: '/register'
//         },
//         {
//             text: 'Recover',
//             link: '/recover'
//         },
//         {
//             text: 'Lock',
//             link: '/lock'
//         },
//         {
//             text: '404',
//             link: '/404'
//         },
//         {
//             text: '500',
//             link: '/500'
//         },
//         {
//             text: 'Maintenance',
//             link: '/maintenance'
//         }
//     ]
// };
// const Blog = {
//     text: 'Blog',
//     link: '/blog',
//     icon: 'icon-notebook',
//     submenu: [
//         {
//             text: 'List',
//             link: '/blog/list'
//         },
//         {
//             text: 'Post',
//             link: '/blog/post'
//         },
//         {
//             text: 'Articles',
//             link: '/blog/articles'
//         },
//         {
//             text: 'Article View',
//             link: '/blog/articleview'
//         }
//     ]
// }
// const Ecommerce = {
//     text: 'Ecommerce',
//     link: '/ecommerce',
//     icon: 'icon-basket-loaded',
//     submenu: [
//         {
//             text: 'Orders',
//             link: '/ecommerce/orders'
//         },
//         {
//             text: 'Order View',
//             link: '/ecommerce/orderview'
//         },
//         {
//             text: 'Products',
//             link: '/ecommerce/products'
//         },
//         {
//             text: 'Product View',
//             link: '/ecommerce/productview'
//         },
//         {
//             text: 'Checkout',
//             link: '/ecommerce/checkout'
//         }
//     ]
// }
// const Extras = {
//     text: 'Extras',
//     link: '/extras',
//     icon: 'icon-cup',
//     submenu: [
//         {
//             text: 'Contacts',
//             link: '/extras/contacts'
//         },
//         {
//             text: 'Contact details',
//             link: '/extras/contactdetails'
//         },
//         {
//             text: 'Projects',
//             link: '/extras/projects'
//         },
//         {
//             text: 'Projects details',
//             link: '/extras/projectsdetails'
//         },
//         {
//             text: 'Team Viewer',
//             link: '/extras/teamviewer'
//         },
//         {
//             text: 'Social Board',
//             link: '/extras/socialboard'
//         },
//         {
//             text: 'Vote links',
//             link: '/extras/votelinks'
//         },
//         {
//             text: 'Bug tracker',
//             link: '/extras/bugtracker'
//         },
//         {
//             text: 'Faq',
//             link: '/extras/faq'
//         },
//         {
//             text: 'Help center',
//             link: '/extras/helpcenter'
//         },
//         {
//             text: 'Followers',
//             link: '/extras/followers'
//         },
//         {
//             text: 'Settings',
//             link: '/extras/settings'
//         },
//         {
//             text: 'Plans',
//             link: '/extras/plans'
//         },
//         {
//             text: 'File manager',
//             link: '/extras/filemanager'
//         },
//         {
//             text: 'Forum',
//             link: '/extras/forum'
//         },
//         {
//             text: 'Mailbox',
//             link: '/extras/mailbox'
//         },
//         {
//             text: 'Timeline',
//             link: '/extras/timeline'
//         },
//         {
//             text: 'Calendar',
//             link: '/extras/calendar'
//         },
//         {
//             text: 'Invoice',
//             link: '/extras/invoice'
//         },
//         {
//             text: 'Search',
//             link: '/extras/search'
//         },
//         {
//             text: 'Todo list',
//             link: '/extras/todolist'
//         },
//         {
//             text: 'Profile',
//             link: '/extras/profile'
//         },
//         {
//             text: 'Code editor',
//             link: '/extras/codeeditor'
//         }
//     ]
// }
// const headingMain = {
//     text: 'Main Navigation',
//     heading: true
// };
// const headingComponents = {
//     text: 'Components',
//     heading: true
// };
// const headingMore = {
//     text: 'More',
//     heading: true
// };
var menu = [
    // headingMain,
    // Home,
    Home,
    site,
    featuredProducts,
    Sales,
    activityreports,
    userslist,
    docusLibrary
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideNavbarComponent = (function () {
    function SideNavbarComponent(menu, settings, injector) {
        this.menu = menu;
        this.settings = settings;
        this.injector = injector;
        this.openModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.menuItems = menu.getMenu();
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]);
        this.router.events.subscribe(function (val) {
            // close any submenu opened when route changes
            _this.removeFloatingNav();
            // scroll view to top
            window.scrollTo(0, 0);
        });
    };
    SideNavbarComponent.prototype.test = function (value) {
        console.log(value);
        this.openModal.next('shaik');
    };
    SideNavbarComponent.prototype.toggleSubmenuClick = function (event) {
        var _this = this;
        if (!this.isSidebarCollapsed() && !this.isSidebarCollapsedText() && !this.isEnabledHover()) {
            event.preventDefault();
            var target = $(event.target || event.srcElement || event.currentTarget);
            var ul_1, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a').first();
            }
            ul_1 = anchor.next();
            // hide other submenus
            var parentNav_1 = ul_1.parents('.sidebar-subnav');
            $('.sidebar-subnav').each(function (idx, el) {
                var $el = $(el);
                // if element is not a parent or self ul
                if (!$el.is(parentNav_1) && !$el.is(ul_1)) {
                    _this.closeMenu($el);
                }
            });
            // abort if not UL to process
            if (!ul_1.length) {
                return;
            }
            // any child menu should start closed
            ul_1.find('.sidebar-subnav').each(function (idx, el) {
                _this.closeMenu($(el));
            });
            // toggle UL height
            if (parseInt(ul_1.height(), 0)) {
                this.closeMenu(ul_1);
            }
            else {
                // expand menu
                ul_1.on('transitionend', function () {
                    ul_1.height('auto').off('transitionend');
                }).height(ul_1[0].scrollHeight);
                // add class to manage animation
                ul_1.addClass('opening');
            }
        }
    };
    // Close menu collapsing height
    SideNavbarComponent.prototype.closeMenu = function (elem) {
        elem.height(elem[0].scrollHeight); // set height
        elem.height(0); // and move to zero to collapse
        elem.removeClass('opening');
    };
    SideNavbarComponent.prototype.toggleSubmenuHover = function (event) {
        var self = this;
        if (this.isSidebarCollapsed() || this.isSidebarCollapsedText() || this.isEnabledHover()) {
            event.preventDefault();
            this.removeFloatingNav();
            var target = $(event.target || event.srcElement || event.currentTarget);
            var ul = void 0, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a');
            }
            ul = anchor.next();
            if (!ul.length) {
                return; // if not submenu return
            }
            var $aside = $('.aside');
            var $asideInner = $aside.children('.aside-inner'); // for top offset calculation
            var $sidebar = $asideInner.children('.sidebar');
            var mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
            var itemTop = ((anchor.parent().position().top) + mar) - $sidebar.scrollTop();
            var floatingNav_1 = ul.clone().appendTo($aside);
            var vwHeight = $(window).height();
            // let itemTop = anchor.position().top || anchor.offset().top;
            floatingNav_1
                .removeClass('opening') // necesary for demo if switched between normal//collapsed mode
                .addClass('nav-floating')
                .css({
                position: this.settings.layout.isFixed ? 'fixed' : 'absolute',
                top: itemTop,
                bottom: (floatingNav_1.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });
            floatingNav_1
                .on('mouseleave', function () { floatingNav_1.remove(); })
                .find('a').on('click', function (e) {
                e.preventDefault(); // prevents page reload on click
                // get the exact route path to navigate
                self.router.navigate([$(this).attr('route')]);
            });
            this.listenForExternalClicks();
        }
    };
    SideNavbarComponent.prototype.listenForExternalClicks = function () {
        var _this = this;
        var $doc = $(document).on('click.sidebar', function (e) {
            if (!$(e.target).parents('.aside').length) {
                _this.removeFloatingNav();
                $doc.off('click.sidebar');
            }
        });
    };
    SideNavbarComponent.prototype.removeFloatingNav = function () {
        $('.nav-floating').remove();
    };
    SideNavbarComponent.prototype.isSidebarCollapsed = function () {
        return this.settings.layout.isCollapsed;
    };
    SideNavbarComponent.prototype.isSidebarCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    SideNavbarComponent.prototype.isEnabledHover = function () {
        return this.settings.layout.asideHover;
    };
    return SideNavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SideNavbarComponent.prototype, "openModal", void 0);
SideNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-navbar',
        template: __webpack_require__(1023),
        styles: [__webpack_require__(974)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object])
], SideNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=side-navbar.component.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userblock_service__ = __webpack_require__(920);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserblockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserblockComponent = (function () {
    function UserblockComponent(userblockService) {
        this.userblockService = userblockService;
        this.someEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user = {
            picture: 'assets/img/user/02.jpg'
        };
    }
    UserblockComponent.prototype.ngOnInit = function () {
    };
    UserblockComponent.prototype.callParent = function () {
        this.someEvent.next('fayaz');
    };
    UserblockComponent.prototype.userBlockIsVisible = function () {
        return this.userblockService.getVisibility();
    };
    return UserblockComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserblockComponent.prototype, "someEvent", void 0);
UserblockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userblock',
        template: __webpack_require__(1024),
        styles: [__webpack_require__(975)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */]) === "function" && _a || Object])
], UserblockComponent);

var _a;
//# sourceMappingURL=userblock.component.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavsearchComponent = (function () {
    function NavsearchComponent(elem) {
        this.elem = elem;
        this.onclose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document)
            .on('keyup', function (event) {
            if (event.keyCode === 27) {
                _this.closeNavSearch();
            }
        })
            .on('click', function (event) {
            if (!$.contains(_this.elem.nativeElement, event.target)) {
                _this.closeNavSearch();
            }
        });
    };
    NavsearchComponent.prototype.closeNavSearch = function () {
        this.visible = false;
        this.onclose.emit();
    };
    NavsearchComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes['visible'].currentValue)
        if (changes['visible'].currentValue === true) {
            this.elem.nativeElement.querySelector('input').focus();
        }
    };
    NavsearchComponent.prototype.handleForm = function () {
        console.log('Form submit: ' + this.term);
    };
    return NavsearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NavsearchComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavsearchComponent.prototype, "onclose", void 0);
NavsearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navsearch',
        template: __webpack_require__(1025),
        styles: [__webpack_require__(976)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NavsearchComponent);

var _a;
//# sourceMappingURL=navsearch.component.js.map

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var screenfull = __webpack_require__(452);
var browser = __webpack_require__(451);




var TopNavbarComponent = (function () {
    function TopNavbarComponent(menu, settings, themes, navbarService) {
        this.menu = menu;
        this.settings = settings;
        this.themes = themes;
        this.navbarService = navbarService;
        this.navCollapsed = true; // for horizontal layout
        this.menuItems = []; // for horizontal layout
        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        // this.navbarService.url  = 'http://localhost:4200/src/app/shared/data.json';
        // this.navbarService.getData().subscribe(res => {
        //     console.log(res);
        //     this.logo = res[0].logo.src;
        //     this.themes.setTheme(res[0].default);
        // });
        if (localStorage.getItem('currentTheme')) {
            this.themes.setTheme(localStorage.getItem('currentTheme'));
        }
        if (localStorage.getItem('logo')) {
            this.logo = localStorage.getItem('logo');
        }
        else {
            this.logo = 'assets/img/logo.png';
        }
        if (localStorage.getItem('logoIcon')) {
            this.logoIcon = localStorage.getItem('logoIcon');
        }
        else {
            this.logoIcon = 'assets/img/logo-single.png';
        }
        this.isNavSearchVisible = false;
        if (browser.msie) {
            this.fsbutton.nativeElement.style.display = 'none';
        }
    };
    // toggleUserBlock(event) {
    //     event.preventDefault();
    //     this.userblockService.toggleVisibility();
    // }
    TopNavbarComponent.prototype.openNavSearch = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    };
    TopNavbarComponent.prototype.setNavSearchVisible = function (stat) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    };
    TopNavbarComponent.prototype.getNavSearchVisible = function () {
        return this.isNavSearchVisible;
    };
    TopNavbarComponent.prototype.toggleOffsidebar = function () {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    };
    TopNavbarComponent.prototype.toggleCollapsedSideabar = function () {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    };
    TopNavbarComponent.prototype.isCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    TopNavbarComponent.prototype.toggleFullScreen = function (event) {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        var el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }
    };
    return TopNavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fsbutton'),
    __metadata("design:type", Object)
], TopNavbarComponent.prototype, "fsbutton", void 0);
TopNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-top-navbar',
        template: __webpack_require__(1026),
        styles: [__webpack_require__(977)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _d || Object])
], TopNavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=top-navbar.component.js.map

/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(962)
var ieee754 = __webpack_require__(993)
var isArray = __webpack_require__(994)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "input.form-control {\n  width: 95% !important; }\n\n@media only screen and (min-width: 781px) {\n  input.form-control {\n    width: 100% !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".showMOdal {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".profileEdit {\n  padding-left: 3%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #ccc; }\n\n.brand {\n  font-size: 30px;\n  font-weight: 900;\n  color: white;\n  font-family: inherit;\n  padding-top: 7% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 994:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        if (typeof Chart === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'canvas[baseChart]', exportAs: 'base-chart' },] },
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    BaseChartDirective.propDecorators = {
        'data': [{ type: core_1.Input },],
        'datasets': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'chartType': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'chartClick': [{ type: core_1.Output },],
        'chartHover': [{ type: core_1.Output },],
    };
    return BaseChartDirective;
}());
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] },
    ];
    /** @nocollapse */
    ChartsModule.ctorParameters = function () { return []; };
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(995));


/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(996));


/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(15);
var core_1 = __webpack_require__(0);
var file_drop_directive_1 = __webpack_require__(933);
var file_select_directive_1 = __webpack_require__(935);
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ })

});
//# sourceMappingURL=0.chunk.js.map